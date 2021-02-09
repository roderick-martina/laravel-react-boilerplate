interface IUser {
    name: string
    two_factor_enabled: boolean
}

export interface iAuth {
    user: IUser
}

export interface IDefaultProps {
    route_name: string
    auth: iAuth
}
