'use client';
import { Box } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { useTheme } from '@mui/material/styles';

export interface FillIconProps {
  fillPercentage: number;
  ariaLabel: string;
}

export function FillIcon({ fillPercentage, ariaLabel }: FillIconProps) {
  const theme = useTheme();
  return (
    <Box position="relative" width={24} height={24}>
      <FavoriteBorderRoundedIcon color="success" aria-label={ariaLabel} />
      <Box position="absolute" top={0} left={0}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <defs>
            <linearGradient
              id="dynamic-gradient"
              x1="0"
              y1="100%"
              x2="0"
              y2="0"
            >
              <stop
                offset={`${fillPercentage}%`}
                stopColor={theme.palette.success.main}
              />
              <stop offset={`${fillPercentage}%`} stopColor="transparent" />
            </linearGradient>
          </defs>
          <FavoriteRoundedIcon style={{ fill: 'url(#dynamic-gradient)' }} />
        </svg>
      </Box>
    </Box>
  );
}

export default FillIcon;
