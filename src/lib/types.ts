export interface User {
  id: string;
  login_token: string;
  username: string;
  avatar: string;
  discriminator: string;
  premium_type: string;
  global_name: string;
  mfa_enabled: boolean;
  locale: string;
  email: string;
  verified: boolean;
  discord_access_token: string;
  discord_refresh_token: string;
  discord_expires_in: string;
  discord_token_type: string;
  discord_token_scope: string;
}
