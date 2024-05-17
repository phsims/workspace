"use client"
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
  size?: 'small' | 'medium' | 'large';
}

export function ButtonLink({
  text,
  link,
  endIcon,
  startIcon,
  size='medium',
  variant = 'contained',
  color = 'primary',
}: ButtonLinkProps) {
  const router = useRouter()
  
  return (
    <Button variant={variant} color={color} startIcon={startIcon} size={size} endIcon={endIcon} onClick={() => router.push(link)} >
      {text}
    </Button>
  );
}

export default ButtonLink;
