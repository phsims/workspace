import { Button, Link } from '@mui/material';


export interface ButtonLinkProps {
  text: string;
  link:string,
  variant?: 'text' | 'outlined' | 'contained';
  color?:
    | 'primary'
    | 'inherit'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
}

export function ButtonLink({
  text,
  link,
  variant='contained',
  color = 'primary',
}: ButtonLinkProps) {
  return (
    <Link href={link}>
      <Button variant={variant} color={color}>
        {text}
      </Button>
    </Link>
  );
}

export default ButtonLink;