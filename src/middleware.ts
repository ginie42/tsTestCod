import isAuth from './middleware/isAuth';
import upload from './middleware/multer';

export const middlewares = [
    {
        method: "post",
        route: "/main",
        middleware: [
            isAuth,
            upload,
        ]
    }
]