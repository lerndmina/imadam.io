export interface User {
  id: number;
  name: string;
  profileImgBase64: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  secondsToExpire: number;
  scope: string[];
}
