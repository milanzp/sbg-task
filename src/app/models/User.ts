export interface UserDTO {
    href: string;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    tags: Array<any>;
    affiliation: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    country: string;
    zip_code: string;
}

export class User {
    public static fromData(data: UserDTO): User {
        return new User(data.username, data.email);
    }

    constructor(public username: string, public email: string) {}
}
