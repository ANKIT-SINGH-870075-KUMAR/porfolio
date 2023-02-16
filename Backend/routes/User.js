import express from "express";
import { addProject, addTimeline, addYoutube, contact, deleteProject, deleteTimeline, deleteYoutube, getUser, login, logout, myProfile, updateUser } from "../controller/User.js";
import { isAuthenticated } from "../middlewares/auth.js";

export const userRouter = express.Router()

//login route: POST request - no admin requried and using login function
userRouter.route('/login').post(login);

//logout route: GET request - no admin requried and using logout function
userRouter.route("/logout").get(logout);

//user route: GET request - no admin requried and using user function
userRouter.route("/user").get(getUser);

//myProfile route: GET request - only admin requried and using create user function
userRouter.route("/me").get(isAuthenticated, myProfile);

//contact route: POST request - no admin requried and using contact function
userRouter.route("/contact").post(contact);

//update route: PUT request - only admin requried and using update user function
userRouter.route("/admin/update").put(isAuthenticated, updateUser);

//addtimeline route: POST request - only admin requried and using addtimeline function
userRouter.route("/admin/timeline/add").post(isAuthenticated, addTimeline);

//addyoutube route: POST request - only admin requried and using addyoutube function
userRouter.route("/admin/youtube/add").post(isAuthenticated, addYoutube);

//addproject route: POST request - only admin requried and using addproject function
userRouter.route("/admin/project/add").post(isAuthenticated, addProject);

//deletetimeline route: DELETE request - only admin requried and using deletetimeline function
userRouter.route("/admin/timeline/:id").delete(isAuthenticated, deleteTimeline);

//deleteyoutube route: DELETE request - only admin requried and using deleteyoutube function
userRouter.route("/admin/youtube/:id").delete(isAuthenticated, deleteYoutube);

//deleteproject route: DELETE request - only admin requried and using deleteproject function
userRouter.route("/admin/project/:id").delete(isAuthenticated, deleteProject);
 