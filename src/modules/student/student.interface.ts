export type Name = {
    firstName: string,
    middleName?: string,
    lastName: string,
}

export type Student = {
    id: string,
    name: Name,
    age: number,
    email: string,
    phone: string,
    address: string,
    gender: 'male' | 'female' | 'other',
    bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    fatherName: string,
    motherName: string,
}