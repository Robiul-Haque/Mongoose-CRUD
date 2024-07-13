import { z } from "zod";

const nameSchema = z.object({
  firstName: z.string().min(3, { message: "Must be 3 or more characters long" }).max(20, { message: "Must be 20 or fewer characters long" }).toUpperCase().nonempty({ message: 'First name is required, bro you miss me' }),
  middleName: z.string().optional(),
  lastName: z.string().min(3).max(20).nonempty({ message: 'Last name is required, bro you miss me' }),
});


const studentValidationSchema = z.object({
  body: z.object({
    id: z.string().nonempty({ message: 'Student ID is required, you miss again bro' }),
    name: nameSchema,
    age: z.number({ required_error: 'Age is required' }).int().min(10, { message: "Must be 10 or more characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(8, { message: "Must be 7 or more characters long" }).nonempty({ message: 'Phone number is required' }),
    address: z.string(),
    gender: z.enum(['male', 'female', 'other']),
    bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
    fatherName: z.string(),
    motherName: z.string(),
  })
})

export const studentValidation = {
  studentValidationSchema,
}