import { Router } from "express";
import { studentRouter } from "../modules/student/student.route";

const router = Router();

const moduleRouter = [
    {
        path: '/students',
        route: studentRouter
    }
]

moduleRouter.forEach(route => router.use(route.path, route.route))

export default router;