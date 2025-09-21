import jwt from "jsonwebtoken";
import User from "../models/User.js";

// verify token

export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if(!token) return res.status(401).json({message: "No token provided"});

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");
        if (!req.user) return res.status(401).json({message: "User not found"});

        next();
    } catch(error){
        res.status(401).json({message: "Invalid token"});
    }
};

// role check middleware

export const roleMiddleware = (allowedRoles) => {
    return(req, res, next) => {
        if (!req.user || !allowedRoles.includes(req.user.role)){
            return res.status(403).json({message: "Forbidden: Access denied"});
        } 
        next();
    }
}