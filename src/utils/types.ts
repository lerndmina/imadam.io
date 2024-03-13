export interface Monitor {
  id: string;
  type: string;
  attributes: {
    url: string;
    pronounceable_name: string;
    auth_username: string;
    auth_password: string;
    monitor_type: string;
    monitor_group_id: string | null;
    last_checked_at: string;
    status: string;
    policy_id: string | null;
    required_keyword: string | null;
    verify_ssl: boolean;
    check_frequency: number;
    call: boolean;
    sms: boolean;
    email: boolean;
    push: boolean;
    team_wait: number | null;
    http_method: string;
    request_timeout: number;
    recovery_period: number;
    request_headers: string[];
    request_body: string;
    follow_redirects: boolean;
    remember_cookies: boolean;
    created_at: string;
    updated_at: string;
    ssl_expiration: string | null;
    domain_expiration: string | null;
    regions: string[];
    expected_status_codes: number[];
    port: number | null;
    confirmation_period: number;
    paused_at: string | null;
    paused: boolean;
    maintenance_from: string | null;
    maintenance_to: string | null;
    maintenance_timezone: string;
    playwright_script: string | null;
  };
  relationships: {
    policy: {
      data: any; // You may define a more specific type here if known
    };
  };
}
