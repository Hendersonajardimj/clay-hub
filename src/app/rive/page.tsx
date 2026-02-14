import dynamic from 'next/dynamic';

const RiveStudio = dynamic(() => import('@/components/RiveStudio'), {
  ssr: false
});

export default function RivePage() {
  return <RiveStudio />;
}
