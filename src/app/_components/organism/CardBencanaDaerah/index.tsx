import { Paper, Stack, Typography } from '@mui/material';
import HorizontalStackBar, {
  StackBarProps,
} from '@AtomComponents/HorizontalStackBar';

type CardBencanaDaerahProps = {
  /**
   * Nama Lokasi
   */
  title: string;
  data: Array<StackBarProps>;
};

export default function CardBencanaDaerah(props: CardBencanaDaerahProps) {
  return (
    <Paper elevation={3}>
      <Stack direction="column" padding="8px">
        <Typography variant="h6">{props.title}</Typography>
        <HorizontalStackBar data={props.data} showLegend />
      </Stack>
    </Paper>
  );
}
