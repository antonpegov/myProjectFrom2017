export class User {
    constructor(
        public readonly id: string = 'init',
        public readonly fname: string = 'intit',
        public readonly lname: string = 'intit',
        public readonly mname: string = 'intit',
        public readonly role: Role = Role.user,
        public readonly dep: string = 'intit',
        public readonly photo: string = 'intit'
    ){}
}

export enum Role { user=1, adviser, admin }