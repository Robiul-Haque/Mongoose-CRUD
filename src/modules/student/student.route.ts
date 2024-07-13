import express from 'express';
import { studentController } from './student.controller';
import validationRequest from '../../middleware/validationRequest';
import { studentValidation } from './student.validation';
const router = express.Router();

// API endpoints for Students
router.post('/create-student', validationRequest(studentValidation.studentValidationSchema), studentController.createSingleStudent);
router.get('/get-single-student/:studentId', studentController.getSingleStudent);
router.put('/update-single-student/:id', validationRequest(studentValidation.studentValidationSchema), studentController.updateSingleStudent);
router.get('/txt');


export const studentRouter = router;