import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const createUser = async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json({
        succeded: true,
    });
};
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        console.log("req.body",req.body);

        const user = await User.findOne({ username })

        let same = false;

        if (user) {
            same = await bcrypt.compare(password, user.password);
        }
        else {
            return res.status(401).json({
                succeded: false,
            });
        }

        if (same) {
            res.status(200).json({
                user,
                token:createToken(user._id),
            })
        }
        else {
            res.status(401).json({
                succeded: false,
                error: "invalid information"
            })
        }
    } catch (err) {
        res.status(500).json({
            succeded: false,
            err
        })
    }
};

const createToken = (userId) => {
    return jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"1d"
    });
}
export { createUser, loginUser };