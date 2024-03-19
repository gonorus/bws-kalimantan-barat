import { Box, Stack, Tooltip, Zoom } from '@mui/material';
import React from 'react';
import HorizontalStackBarLegend from '@AtomComponents/HorizontalStackBarLegend';

export type StackBarProps = {
  /**
   * Nama Bencana
   */
  title: string;
  /**
   * Jumlah Kejadian Bencana
   */
  value: number;
  /**
   * symbolic color
   */
  color: string;
};

type HorizontalStackBarProps = {
  data: Array<StackBarProps>;
  showLegend?: boolean;
};

export default function HorizontalStackBar(props: HorizontalStackBarProps) {
  const summary = React.useMemo(
    () => props.data.reduce((total, { value }) => total + value, 0),
    [props.data]
  );

  const ClasificationsComponent = React.useMemo(
    () =>
      props.data.map((item) => {
        const width = (item.value / summary) * 100;
        return (
          <Tooltip
            key={item.title}
            title={item.title}
            TransitionComponent={Zoom}
            followCursor
            arrow
          >
            <Box
              width={`${width}%`}
              sx={{
                padding: '4px',
                textAlign: 'center',
                color: 'white',
                background: item.color,
              }}
            >
              {width.toFixed(0)} %
            </Box>
          </Tooltip>
        );
      }),
    [props.data, summary]
  );

  return (
    <Stack direction="column" gap="8px">
      <Stack direction="row">{ClasificationsComponent}</Stack>
      {props.showLegend ? <HorizontalStackBarLegend data={props.data} /> : null}
    </Stack>
  );
}
