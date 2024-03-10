import { Box } from '@mui/material';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Enter your Account Credential',
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Box
      sx={{
        background: '#EFF0F4',
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </Box>
  );
}
