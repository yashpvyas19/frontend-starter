import { getAllUsers, login } from '@/api/api.ts';
import type {
  GetAllUsersInput,
  GetAllUsersOutput,
  LoginInput,
  LoginOutput,
} from '@/features/users/user.type.ts';
import catchAsync from '@/utils/catchAsync.ts';

/*
1. API GENERIC, CATCH ASYNC 2nd GENERIC NEEDS TO BE SAME ALWAYS
2. IF IT IS AXIOS DOCS THEN 3rd GENERIC IS COMPULSORY
3. FALSE => IF PAGINATION NOT NEEDED
4. TRUE => IF PAGINATION IS NEEDED
 */

export const loginApi = catchAsync<LoginInput, LoginOutput>(async data => {
  const res = await login<LoginOutput>({ data });
  return res.data.data;
});

export const getAllUsersApi = catchAsync<GetAllUsersInput, GetAllUsersOutput, false>(async data => {
  const res = await getAllUsers<GetAllUsersOutput>({ data });
  return res.data.data.docs;
});
