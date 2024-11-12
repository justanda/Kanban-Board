import jwt from "jsonwebtoken";
// TODO: verify the token exists and add the user data to the request object
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        const secrectKey = process.env.JWT_SECRET || "";
        jwt.verify(token, secrectKey, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            return next();
        });
    }
    else {
        res.sendStatus(401);
    }
};
