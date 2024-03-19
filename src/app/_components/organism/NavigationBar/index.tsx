'use client';

import NextLink from 'next/link';
import {
  AppBar,
  Box,
  Button,
  Link,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { PropsWithChildren } from 'react';
import UserMenu from '@OrganismComponents/UserMenu';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const pages = [
  { label: 'Beranda', path: ['/dashboard'] },
  { label: 'Penanganan', path: ['404'] },
  {
    label: 'Statistik',
    path: [
      '/dashboard/statistik/infografis-bencana',
      '/dashboard/statistik/daerah-rawan-bencana',
    ],
  },
];

function NavigationButton(
  props: PropsWithChildren<{ href: string; active?: boolean }>
) {
  return (
    <Link
      href={props.href}
      component={NextLink}
      sx={{
        textDecoration: 'none',
        textAlign: 'center',
      }}
    >
      <Button
        variant="text"
        type="button"
        color="inherit"
        sx={{
          color: '#FFFFFF',
          textTransform: 'capitalize',
          borderBottom: `${props.active ? 'solid 3px #87CEFA' : 'unset'}`,
          fontSize: '12px',
          borderRadius: 'unset',
        }}
        fullWidth
      >
        {props.children}
      </Button>
    </Link>
  );
}

export default function NavigationBar() {
  const CurrentPath = usePathname();

  const AvailableMenus = React.useMemo(
    () =>
      pages.map((page) => (
        <NavigationButton
          key={page.label}
          href={page.path[0]}
          active={page.path.some((path) => path === CurrentPath)}
        >
          {page.label}
        </NavigationButton>
      )),
    [CurrentPath]
  );

  return (
    <AppBar
      position="static"
      sx={{
        background: '#191970',
        boxShadow:
          '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      }}
    >
      <Box margin="8px 16px">
        <Toolbar sx={{ display: 'flex', gap: '8px' }} disableGutters>
          <Image
            src="/Logo-PUPR.png"
            alt="logo"
            width={40}
            height={40}
            priority
          />
          <Typography
            component="a"
            href="#"
            sx={{ fontSize: 12, textDecoration: 'none', color: 'inherit' }}
          >
            <Stack>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 'inherit',
                }}
              >
                BALAI WILAYAH SUNGAI KALIMANTAN I
              </Typography>
              <Typography
                sx={{
                  color: '#b3b3b3',
                  fontSize: 'inherit',
                }}
              >
                Direktorat Jenderal Sumber Daya Air
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: '#b3b3b3',
                  fontSize: 'inherit',
                }}
              >
                Kementerian Pekerjaan Umum dan Perumahan Rakyat
              </Typography>
            </Stack>
          </Typography>

          <Box display="flex" flexGrow={1} justifyContent="flex-end" gap="8px">
            {AvailableMenus}
          </Box>

          <UserMenu />
        </Toolbar>
      </Box>
    </AppBar>
  );
}
