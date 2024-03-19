'use client';

import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { PieChart } from '@mui/x-charts';

type SummaryKejadianBencanaDataset = {
  /**
   * Nama Bencana
   */
  title: string;
  /**
   * Nama Bencana
   */
  label: string;
  /**
   * Jumlah Kejadian Bencana
   */
  value: number;
  /**
   * symbolic color
   */
  color: string;
};

type SummaryKejadinBencanaPieChartProps = {
  createdOn?: string;
  dataset: Array<SummaryKejadianBencanaDataset>;
};

export function SummaryKejadinBencanaPieChart(
  props: SummaryKejadinBencanaPieChartProps
) {
  const LastUpdatedDate = React.useMemo(
    () => props.createdOn ?? new Date().toLocaleDateString('en-US'),
    [props.createdOn]
  );

  const TotalBencana: number = React.useMemo(
    () => props.dataset.reduce((total, data) => total + data.value, 0),
    [props.dataset]
  );

  return (
    <Stack
      direction="row"
      gap="8px"
      alignItems="flex-start"
      justifyContent="center"
    >
      <Paper elevation={3} sx={{ position: 'sticky', top: '0px' }}>
        <Stack padding="24px" gap="16px" alignItems="center">
          <Stack alignItems="center">
            <Typography variant="h6">Persentase</Typography>
            <Typography
              variant="caption"
              textTransform="uppercase"
              color="#BCC0D2"
            >
              Last Updated On{' '}
              <Typography variant="subtitle1" component="span" color="black">
                {LastUpdatedDate}
              </Typography>
            </Typography>
          </Stack>
          <PieChart
            height={200}
            width={200}
            margin={{
              right: 0,
              left: 0,
              top: 0,
              bottom: 0,
            }}
            series={[
              {
                data: props.dataset,
              },
            ]}
            slotProps={{
              legend: {
                hidden: true,
              },
            }}
          />
          <Typography
            variant="caption"
            color="#BCC0D2"
            textTransform="capitalize"
          >
            total bencana terjadi:{' '}
            <Typography variant="subtitle1" component="span" color="black">
              {TotalBencana}
            </Typography>
          </Typography>
        </Stack>
      </Paper>
    </Stack>
  );
}
