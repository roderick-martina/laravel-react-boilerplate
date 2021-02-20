interface IUser {
    name: string;
    first_name: string;
    last_name: string;
    email: string;
    two_factor_enabled: boolean;
}

export interface iAuth {
    user: IUser;
}

export interface IDefaultProps {
    route_name: string;
    auth: iAuth;
    errors: any;
}
