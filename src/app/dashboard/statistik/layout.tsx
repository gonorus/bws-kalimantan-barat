import { Box, Stack } from '@mui/material';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { PageStatistikNavigation } from '@TemplateComponents/PageStatistik';

export const metadata: Metadata = {
  title: 'Statistik Bencana',
  description: 'Content Statistik',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Stack direction="row" gap="16px" padding="8px">
      <Box>
        <PageStatistikNavigation />
      </Box>
      <Box flexGrow={1}>{children}</Box>
    </Stack>
  );
}
