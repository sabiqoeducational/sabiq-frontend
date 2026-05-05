"use client";

import {
  isApiError,
  isNetworkError,
  isValidationError,
} from "@/core/errors/AppError";

export type ApiErrorInfo = {
  message: string;
  statusCode?: number;
  field?: string;
  isNetworkError: boolean;
  isApiError: boolean;
  isValidationError: boolean;
};

const FALLBACK_MESSAGE = "An unexpected error occurred. Please try again.";

export function useApiError(error: unknown): ApiErrorInfo | null {
  if (!error) return null;

  if (isApiError(error)) {
    return {
      message: error.message,
      statusCode: error.status,
      isNetworkError: false,
      isApiError: true,
      isValidationError: false,
    };
  }

  if (isNetworkError(error)) {
    return {
      message: "Unable to connect. Check your internet connection.",
      isNetworkError: true,
      isApiError: false,
      isValidationError: false,
    };
  }

  if (isValidationError(error)) {
    return {
      message: error.message,
      field: error.field,
      isNetworkError: false,
      isApiError: false,
      isValidationError: true,
    };
  }

  return {
    message: error instanceof Error ? error.message : FALLBACK_MESSAGE,
    isNetworkError: false,
    isApiError: false,
    isValidationError: false,
  };
}
