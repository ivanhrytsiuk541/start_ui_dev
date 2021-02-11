import React from 'react';

import { Box, Button, Center, Heading } from '@chakra-ui/react';
import { useQueryClient } from 'react-query';
import { Link as RouterLink } from 'react-router-dom';

import { LoginForm } from '@/app/auth/LoginForm';
import { useRedirectFromUrl } from '@/app/router';

export const PageLogin = () => {
  const redirect = useRedirectFromUrl();
  const queryCache = useQueryClient();
  const onLogin = () => {
    queryCache.clear();
    redirect();
  };
  return (
    <Box p="2" pb="4rem" w="20rem" maxW="full" m="auto">
      <Box p="6" bg="white" borderRadius="md" boxShadow="md">
        <Heading size="lg" mb="4">
          Log In
        </Heading>
        <LoginForm onSuccess={onLogin} />
      </Box>
      <Center mt="8">
        <Button as={RouterLink} to="/account/register" variant="link">
          Need an account?{' '}
          <Box as="strong" color="brand.500" ml="2">
            Register now!
          </Box>
        </Button>
      </Center>
    </Box>
  );
};
