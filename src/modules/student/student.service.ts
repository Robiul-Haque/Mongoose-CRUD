import { Student } from "./student.interface";
import { studentModel } from "./student.model";

// using local mongo db
const createSingleStudentIntoDB = async (student: Student) => {
    const res = await studentModel.create(student);
    return res;
}

const getSingleStudentIntoDB = async (studentId: string) => {
    console.log('service', studentId);

    const res = await studentModel.find({ id: studentId });
    console.log(res);

    return res;
}

const updateSingleStudentIntoDB = async (id: string, studentUpdateData: string) => {
    console.log(id);
    // updateOne()
    // findByIdAndUpdate()
    // findOneAndUpdate()

    const res = await studentModel.updateOne({ _id: id }, {
        $set: {
            bloodGroup: studentUpdateData
        }
    });
    return res;
}

const studentSearchIntoDB = async (txt: string | any) => {
    const res = await studentModel.find({ name: txt });
    return res;
}


export const studentService = {
    createSingleStudentIntoDB,
    getSingleStudentIntoDB,
    updateSingleStudentIntoDB,
    studentSearchIntoDB,
}