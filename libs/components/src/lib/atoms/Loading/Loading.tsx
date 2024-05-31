import RamenDiningRoundedIcon from '@mui/icons-material/RamenDiningRounded';

import styles from './Loading.module.css';
import { Box, Typography } from '@mui/material';

export function LoadingComponent() {
  return (
    <Box sx={{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center',height: '100vh'}} >
      <RamenDiningRoundedIcon className={styles['shimer']} color="primary"  sx={{ height: '5rem', width: '5rem' }}/>
      <Typography variant="h6">Whisking Things Up...</Typography>
    </Box>
  );
}

export default LoadingComponent;
