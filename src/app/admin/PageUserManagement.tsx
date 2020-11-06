import { Box } from '@chakra-ui/core';
import React, { useState } from 'react';
import { useUserList } from '@/app/admin/service';

export const PageUserManagement = () => {
  const [page, setPage] = useState(0);

  const {
    users,
    totalItems,
    hasMore,
  } = useUserList({ page });

  return (
    <Box>
      <div>
        <pre>{totalItems}</pre>
        <div>
          {users?.map((user) => (
            <span>{JSON.stringify(user)}</span>
          ))}
        </div>
        <span>Current Page: {page + 1}</span>
        <button onClick={() => setPage((old) => old - 1)} disabled={page < 1}>
          Previous Page
        </button>{' '}
        <button onClick={() => setPage((old) => old + 1)} disabled={!hasMore}>
          Next Page
        </button>
      </div>
    </Box>
  );
};
