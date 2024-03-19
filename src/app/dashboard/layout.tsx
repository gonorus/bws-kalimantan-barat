import { Box, Stack } from '@mui/material';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import NavigationBar from '@OrganismComponents/NavigationBar';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Main Content Page',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Stack
      sx={{
        background: '#EFF0F4',
        height: '100vh',
      }}
    >
      <NavigationBar />
      <Box flexGrow={1} overflow="auto">
        {children}
      </Box>
    </Stack>
  );
}
