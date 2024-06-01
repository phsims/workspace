import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

export interface InfoIconProps {
  infoTitle: string;
  icon: ReactNode;
  text: string;
}

export function InfoIcon({ infoTitle, icon, text }: InfoIconProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
      {icon}
      <Typography variant="body1_Bold" color={'grey.dark'}>
        {infoTitle}
      </Typography>
      <Typography variant="body1" color={'grey.dark'}>
        {text}
      </Typography>
    </Box>
  );
}

export default InfoIcon;
