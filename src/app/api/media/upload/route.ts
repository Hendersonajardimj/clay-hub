import { NextRequest, NextResponse } from 'next/server';

const MAX_UPLOAD_BYTES = 75 * 1024 * 1024;
const UPLOAD_ENABLED = process.env.MEDIA_UPLOAD_ENABLED === 'true';

const isAllowedFileType = (value: string | null) => {
  if (!value) {
    return false;
  }

  const lower = value.toLowerCase();
  return (
    lower.startsWith('image/') ||
    lower.startsWith('video/') ||
    lower === 'application/octet-stream'
  );
};

export async function POST(request: NextRequest) {
  if (!UPLOAD_ENABLED) {
    return NextResponse.json(
      {
        error: 'Media upload endpoint is disabled. Set MEDIA_UPLOAD_ENABLED=true when ready.',
        status: 'disabled'
      },
      { status: 503 }
    );
  }

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    return NextResponse.json(
      {
        error:
          'Cloudinary is not fully configured. Set CLOUDINARY_CLOUD_NAME and CLOUDINARY_UPLOAD_PRESET.',
        status: 'not_configured'
      },
      { status: 501 }
    );
  }

  const formData = await request.formData();
  const file = formData.get('file');

  if (!(file instanceof File)) {
    return NextResponse.json(
      {
        error:
          'No file was received. Submit multipart form field named "file".',
        status: 'invalid_request'
      },
      { status: 400 }
    );
  }

  if (file.size > MAX_UPLOAD_BYTES) {
    return NextResponse.json(
      {
        error: 'File exceeds upload limit.',
        status: 'file_too_large',
        maxBytes: MAX_UPLOAD_BYTES
      },
      { status: 400 }
    );
  }

  if (!isAllowedFileType(file.type)) {
    return NextResponse.json(
      {
        error: 'Unsupported media type. Use image/* or video/*.',
        status: 'unsupported_media'
      },
      { status: 400 }
    );
  }

  const payload = new FormData();
  payload.append('file', file);
  payload.append('upload_preset', uploadPreset);

  const uploadResponse = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
    {
      method: 'POST',
      body: payload
    }
  );

  if (!uploadResponse.ok) {
    const reason = await uploadResponse.text();
    return NextResponse.json(
      {
        error: 'Cloudinary upload failed.',
        detail: reason,
        status: 'upload_failed'
      },
      { status: 502 }
    );
  }

  const uploadResult = await uploadResponse.json();

  return NextResponse.json({
    status: 'ok',
    publicId: uploadResult.public_id,
    secureUrl: uploadResult.secure_url,
    resourceType: uploadResult.resource_type,
    format: uploadResult.format
  });
}

