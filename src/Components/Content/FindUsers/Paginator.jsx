import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Paginator({onClickCurrentPage,totalCount}){
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    onClickCurrentPage(value)
    setPage(value);
  };
  return (
    <Stack spacing={2}>
      <Pagination count={Math.round(totalCount/10)} page={page} onChange={handleChange} />
    </Stack>
  );
}