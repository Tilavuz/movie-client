export interface UserInterface {
  _id: string;
  username: string;
  password?: string;
  role: 'user' | 'admin';
}