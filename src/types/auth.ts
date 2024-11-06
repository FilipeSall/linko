export interface User {
    name:string
    email:string
    password:string
    role?:string
    nicheId: number
}

export interface CreateUser extends User {
    confirmPassword: string
}