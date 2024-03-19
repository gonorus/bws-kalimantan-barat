'use client';

import CardBencanaDaerah from '@OrganismComponents/CardBencanaDaerah';
import { SummaryKejadinBencanaPieChart } from '@TemplateComponents/PageStatistik';
import { Grid, Stack } from '@mui/material';
import React from 'react';

export default function Page() {
  const [FetchDataResult, SetFetchDataResult] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://api.npoint.io/9d7566794b6df351e0d6'
      );
      const jsonData = await response.json();
      SetFetchDataResult(jsonData);
    };
    fetchData();
  }, []);

  const CardBencanaDaerahComponents: any = React.useMemo(
    () =>
      FetchDataResult.map((data: any) => (
        <Grid item key={data.wilayah} xs={6}>
          <CardBencanaDaerah title={data.wilayah} data={data.data_bencana} />
        </Grid>
      )),
    [FetchDataResult]
  );

  const JenisBencana: any = React.useMemo(
    () => (FetchDataResult.length > 0 ? FetchDataResult[0].data_bencana : []),
    [FetchDataResult]
  );

  return (
    <Stack direction="row" gap="8px">
      <SummaryKejadinBencanaPieChart dataset={JenisBencana} />
      <Grid container spacing="8px">
        {CardBencanaDaerahComponents}
      </Grid>
    </Stack>
  );
}
