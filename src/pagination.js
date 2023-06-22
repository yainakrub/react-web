import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

export default function PaginationOutlined() {
  return (
    <Container maxWidth="sm" sx={{p:10}}>
    <Stack spacing={2}>
      {/* <Pagination count={10} variant="outlined" /> */}
      {/* <Pagination count={50} variant="outlined" color="primary" /> */}
      <Pagination count={10} variant="outlined" color="secondary" />
      {/* <Pagination count={10} variant="outlined" disabled /> */}
    </Stack>
    </Container>
  );
}