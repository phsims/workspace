
import { ReactNode } from 'react';
import { useRouter } from 'next/navigation'
import { Button } from '@mui/material';

export interface ButtonLinkProps {
  text: string;
  link: string;
  variant?: 'text' | 'outlined' | 'contained';
  color?:
    | 'primary'
    | 'inherit'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  endIcon?: ReactNode;
  startIcon?: ReactNode;
}

export function ButtonLink({
  text,
  link,
  variant = 'contained',
  color = 'primary',
  endIcon,
  startIcon
}: ButtonLinkProps) {
  const router = useRouter()
  
  return (
    <Button variant={variant} color={color} startIcon={startIcon} endIcon={endIcon} onClick={() => router.push(link)} >
      {text}
    </Button>
  );
}

export default ButtonLink;
