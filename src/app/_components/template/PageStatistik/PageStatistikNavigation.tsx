'use client';

import { Button, Link, Paper, Stack } from '@mui/material';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

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
          textTransform: 'capitalize',
          color: `${props.active ? 'black' : '#BCC0D2'}`,
          fontSize: '12px',
        }}
        fullWidth
      >
        {props.children}
      </Button>
    </Link>
  );
}

export function PageStatistikNavigation() {
  const CurrentPath = usePathname();

  return (
    <Paper
      elevation={3}
      sx={{ height: 'fit-content', position: 'sticky', top: '0px' }}
    >
      <Stack padding="8px" minWidth="175px" maxWidth="200px" gap="8px">
        <NavigationButton
          href="infografis-bencana"
          active={CurrentPath.includes('infografis-bencana')}
        >
          infografis bencana
        </NavigationButton>
        <NavigationButton
          href="daerah-rawan-bencana"
          active={CurrentPath.includes('daerah-rawan-bencana')}
        >
          daerah rawan bencana
        </NavigationButton>
      </Stack>
    </Paper>
  );
}
