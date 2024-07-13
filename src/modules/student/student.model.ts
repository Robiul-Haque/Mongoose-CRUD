import { Schema, model } from 'mongoose';
import { Name, Student } from './student.interface';

const name = new Schema<Name>({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true,
    },
})

const studentSchema = new Schema<Student>({
    id: { type: String, required: true },
    name: name,
    age: { type: Number, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: true },
    bloodGroup: {
        type: String,
        enum: {
            values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            message: '{VALUE} is not a valid blood group',
        },
    },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
});

export const studentModel = model<Student>('Student', studentSchema);