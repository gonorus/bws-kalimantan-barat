import { Box, Grid, Stack, SxProps, Typography } from '@mui/material';
import React from 'react';
import { StackBarProps } from '@AtomComponents/HorizontalStackBar';

type HorizontalStackBarLegendProps = {
  data: Array<StackBarProps>;
};

export default function HorizontalStackBarLegend(
  props: HorizontalStackBarLegendProps
) {
  const ClasificationsComponent = React.useMemo(
    () =>
      props.data.map((item) => (
        <Grid item key={item.title} xs={3}>
          <Stack direction="row" alignItems="center" gap="8px">
            <Box
              height="12px"
              width="12px"
              sx={{ background: item.color }}
            ></Box>
            <Typography variant="subtitle2">
              {item.title} ({item.value})
            </Typography>
          </Stack>
        </Grid>
      )),
    [props.data]
  );

  return (
    <Grid container gap="8px">
      {ClasificationsComponent}
    </Grid>
  );
}
