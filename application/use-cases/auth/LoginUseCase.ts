import {
  AuthRepository,
  LoginCommand,
  LoginResult,
} from "@/core/interfaces/repositories/AuthRepository";

export class LoginUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(command: LoginCommand): Promise<LoginResult> {
    if (!command.email || !command.password) {
      throw new Error("Email and password are required");
    }

    return this.authRepository.login(command);
  }
}
