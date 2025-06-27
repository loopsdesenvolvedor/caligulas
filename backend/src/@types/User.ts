export type CreateUserInput = {
  name: string;
  username: string;
  email: string;
  password: string;
  avatar?: string;
};

export type AuthRequest = {
  email: string;
  password: string;
};
