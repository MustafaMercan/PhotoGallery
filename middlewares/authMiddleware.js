import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const authenticateToken = async(req,res,next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    console.log(token);
    if(!token){
        return res.states(401).json({
            succeeded:false,
            error:'no token available',
        })
    }
    req.user = await User.findById(
        jwt.verify(token, process.env.JWT_SECRET).userId
    );
    next();
}

export {authenticateToken}