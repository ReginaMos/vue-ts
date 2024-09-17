export interface Country {
    name: string,
    flag: string,
    sales: number,
    value: number,
    baunce: number
}

export interface NewData {
    title: string,
    count: number,
    percent: number,
    img: string,
    color: string
}

export interface TablePoint {
    x: number,
    y: number
}

export interface Author {
    name: string,
    email: string,
    function: 'Manager' | 'Programmer' | 'Executive',
    status: 'online' | 'offline',
    employed: string,
    img: string
}

export interface Product {
    name: string,
    img: string,
    status: 'working' | 'done' | 'cancelled',
    completion: number,
    budget: number
}

export interface User extends Author {
    phone: string,
    about: string,
    project: string[]
}