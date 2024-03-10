'use client';

import { Button, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import { MouseEvent, useRef } from 'react';

export default function LoginForm() {
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const OnSubmitHandler = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
  };

  return (
    <Stack
      direction="column"
      gap="16px"
      sx={{
        background: '#FFFFFF',
        alignItems: 'center',
        padding: '24px',
        borderRadius: '8px',
        boxShadow:
          '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      }}
    >
      <Image src="/Logo-PUPR.png" alt="log" width={70} height={70} priority />

      <Stack>
        <Typography
          variant="h6"
          component="p"
          sx={{
            textAlign: 'center',
          }}
        >
          Balai Wilayah Sungai Kalimantan I
        </Typography>
        <Typography
          variant="caption"
          component="p"
          sx={{
            textAlign: 'center',
            color: '#BCC0D2',
          }}
        >
          Masukkan Detail Login Melalui Form di Bawah
        </Typography>
      </Stack>

      <form>
        <Stack direction="column" gap="8px">
          <TextField
            inputRef={usernameInputRef}
            variant="outlined"
            type="text"
            size="small"
            name="Username"
            label="Username"
            placeholder="Username"
            fullWidth
          />
          <TextField
            inputRef={passwordInputRef}
            variant="outlined"
            type="password"
            size="small"
            name="Password"
            label="Password"
            placeholder="Password"
            autoComplete="false"
            fullWidth
          />
          <Button
            variant="contained"
            type="submit"
            onClick={OnSubmitHandler}
            fullWidth
          >
            LOGIN
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
