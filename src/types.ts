export interface FormState {
  status: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  errors: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
}
