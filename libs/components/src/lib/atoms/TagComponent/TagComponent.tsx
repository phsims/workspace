import {
  Box,
  Typography,
  Chip,
  Stack,
} from '@mui/material';

export interface TagComponentProps {
  title: string;
  tags: string[];
  varient?: 'outlined' | 'filled';
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

export function TagComponent({
  title,
  tags,
  color = 'primary',
  varient = 'filled',
}: TagComponentProps) {
  return (
    <Box >
      <Typography variant="h6" mb='0.5rem'>{title}</Typography>
      <Stack spacing={1} alignItems="center" direction="row" flexWrap='wrap' useFlexGap>
        {tags.map((tag) => (
          <Chip label={tag} color={color} variant={varient}/>
        ))}
      </Stack>
    </Box>
  );
}

export default TagComponent;
