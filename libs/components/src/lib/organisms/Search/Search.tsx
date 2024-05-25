import TextField from '@mui/material/TextField';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Button } from '@mui/material';

export interface SearchProps {
  placeholder: string;
  id: string;
}

export function Search({ id, placeholder = 'Search Recipes' }: SearchProps) {
  return (
    <TextField
      placeholder={placeholder}
      InputProps={{
        endAdornment: (
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#000000',
              color: '#ffffff',
              borderRadius: '50%',
              padding: '1rem',
              minWidth: '52px',
              minHeight: '52px',
              '& .MuiButton-endIcon': { marginLeft: '0px' },
            }}
            endIcon={<SearchRoundedIcon />}
          />
        ),
      }}
      variant="outlined"
      fullWidth
    />
  );
}

export default Search;
