export interface SignUp{
    name: string,
    password: string,
    email:string
}


export interface logIn{
    email:string;
    password: string;
}

export interface product{
    name:string,
    price:number,
    catagory:string,
    color:string,
    description:string,
    image:string,
    id:number

}