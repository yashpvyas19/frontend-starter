import { useMutation, useQuery } from '@tanstack/react-query';

import { getAllUsersApi, loginApi } from '@/features/users/user.api.ts';
import userQueryKeys from '@/features/users/user.keys.ts';

export const useAllUsers = () =>
  useQuery({
    queryKey: [userQueryKeys.users],
    queryFn: getAllUsersApi,
  });

export const useLogin = () => useMutation({ mutationFn: loginApi });
