import { RequestHandler } from "express";
import { studentService } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

// using local mongo db
const createSingleStudent: RequestHandler = catchAsync(async (req, res) => {
    const { student: studentData } = req.body;
    const result = await studentService.createSingleStudentIntoDB(studentData);
    sendResponse(res, { statusCode: httpStatus.OK, success: true, message: 'Student created successfully', data: result })
})

const getSingleStudent: RequestHandler = catchAsync(async (req, res, next) => {
    const { studentId } = req.params;
    const result = await studentService.getSingleStudentIntoDB(studentId);
    if (result.length > 0) {
        sendResponse(res, { statusCode: httpStatus.OK, success: true, message: 'Student fetched successfully', data: result });
    } else {
        sendResponse(res, { statusCode: httpStatus.NOT_FOUND, success: true, message: 'Student not found', data: result });
    }
})

const updateSingleStudent: RequestHandler = catchAsync(async (req, res) => {
    const id = req.params.id;
    const { student: studentUpdateData } = req.body;
    const result = await studentService.updateSingleStudentIntoDB(id, studentUpdateData);
    sendResponse(res, { statusCode: httpStatus.OK, success: true, message: 'Student updated successfully', data: result })
})

const studentSearch: RequestHandler = catchAsync(async (req, res) => {
    const searchTxt = req.query.txt;
    const result = await studentService.studentSearchIntoDB(searchTxt);
    console.log(result);
    sendResponse(res, { statusCode: httpStatus.OK, success: true, message: 'Student fetched successfully', data: result })
})


export const studentController = {
    createSingleStudent,
    getSingleStudent,
    updateSingleStudent,
}