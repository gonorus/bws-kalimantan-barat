'use client';

import dynamic from 'next/dynamic';

const BerandaMap = dynamic(() => import('@OrganismComponents/TileMapBeranda'), {
  ssr: false,
});

export default function DashboardPage() {
  return <BerandaMap />;
}
