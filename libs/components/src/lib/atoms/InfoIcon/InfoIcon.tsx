import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

export interface InfoIconProps {
  infoTitle: string;
  icon: ReactNode;
  text?: string;
  link?: {
    href: string;
    text: string;
  };
}

export function InfoIcon({ infoTitle, icon, text, link }: InfoIconProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
      {icon}
      <Typography variant="body1_Bold" color={'grey.dark'}>
        {infoTitle}
      </Typography>
      {text && (
        <Typography variant="body1" color={'grey.dark'}>
          {text}
        </Typography>
      )}
      {link && (
        <Typography variant="body1" color={'grey.dark'}>
         <a href={link.href}>{link.text}</a>
        </Typography>
      )}
    </Box>
  );
}

export default InfoIcon;
