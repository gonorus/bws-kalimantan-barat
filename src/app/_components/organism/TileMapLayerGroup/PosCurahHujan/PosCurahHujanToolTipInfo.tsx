import { Stack, Typography } from '@mui/material';
import Image from 'next/image';

export function PosCurahHujanToolTipInfo() {
  return (
    <Stack direction="row" gap="8px" alignItems="center">
      <Image
        src="/muka-air.png"
        alt="muka-air"
        width={30}
        height={30}
        priority
      />
      <Stack alignItems="center">
        <Typography sx={{ fontSize: 12, color: 'inherit' }}>
          POS CURAH HUJAN
        </Typography>
        <Stack direction="row" gap="8px">
          <Typography sx={{ fontSize: 12, color: 'inherit' }}>
            5.26 m
          </Typography>
          <Image
            src="/up-arrow.png"
            alt="status"
            width={15}
            height={15}
            priority
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
