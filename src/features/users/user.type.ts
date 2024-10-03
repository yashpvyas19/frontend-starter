export interface LoginInput {
  email: string;
  password?: string;
  rememberMe?: boolean;
}

export interface LoginOutput {
  jwtToken: string;
}

export type GetAllUsersInput = unknown;

export interface GetAllUsersOutput {
  firstName: string;
  lastName: string;
}
