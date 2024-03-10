'use client';

import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import UserMenu from '@OrganismComponents/UserMenu';
import Image from 'next/image';

const pages = ['Beranda', 'Penanganan', 'Statistik'];

export default function NavigationBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const AvailableMenus = React.useMemo(
    () =>
      pages.map((page) => (
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          sx={{ color: '#FFFFFF', fontSize: 12, textTransform: 'capitalize' }}
        >
          {page}
        </Button>
      )),
    []
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

          <Box display="flex" flexGrow={1} justifyContent="flex-end">
            {AvailableMenus}
          </Box>

          <UserMenu />
        </Toolbar>
      </Box>
    </AppBar>
  );
}
