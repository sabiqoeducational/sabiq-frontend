export type LoginCommand = {
  email: string;
  password: string;
};

export type LoginResult = {
  accessToken: string;
  refreshToken: string;
  userId: string;
};

export interface AuthRepository {
  login(command: LoginCommand): Promise<LoginResult>;
}
