import {
  AuthRepository,
  LoginCommand,
  LoginResult,
} from "@/core/interfaces/repositories/AuthRepository";
import { ApiClient } from "@/infrastructure/http/apiClient";

type LoginApiResponse = {
  access_token: string;
  refresh_token: string;
  user_id: string;
};

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly apiClient: ApiClient) {}

  async login(command: LoginCommand): Promise<LoginResult> {
    const response = await this.apiClient.post<LoginApiResponse>(
      "/auth/login",
      command,
    );

    return {
      accessToken: response.access_token,
      refreshToken: response.refresh_token,
      userId: response.user_id,
    };
  }
}
