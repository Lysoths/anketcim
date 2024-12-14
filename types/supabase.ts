// types/auth.ts
export type AuthFormType = "login" | "register";

export interface AuthState {
  email: string;
  password: string;
  loading: boolean;
  error: string | null;
}

export interface AuthFormProps {
  view: AuthFormType;
}
