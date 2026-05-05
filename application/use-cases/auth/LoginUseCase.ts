import { ValidationError } from "@/core/errors/AppError";
import {
  AuthRepository,
  LoginCommand,
  LoginResult,
} from "@/core/interfaces/repositories/AuthRepository";

export class LoginUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(command: LoginCommand): Promise<LoginResult> {
    if (!command.email) {
      throw new ValidationError("Email is required", "email");
    }
    if (!command.password) {
      throw new ValidationError("Password is required", "password");
    }

    return this.authRepository.login(command);
  }
}
