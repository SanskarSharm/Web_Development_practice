const express=require("express");
const userController=require("../controller/user.controller");
const router=express.Router();



router.get("/",userController.getAllUsers);
router.get("/:id",userController.getUserById);
router.delete("/;id",userController.deleteUserById);


module.exports=router;