import {User} from '../model/User.js';
import jwt from 'jsonwebtoken';

export const isAuthenticated = async(req,res,next)=>{
    try {
        
        const {token} =req.cookies;
        
        // unautheriersed user try to acess admin panel 
        if(!token){
            return res.status(400).json({
                success: false,
                message: "Login to Access this resource"
            });
        };
        
        // user already login with coreect email and password
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await User.findById(decoded._id);

       
        req.user = user;
        next();
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message 
        });
    };
};

