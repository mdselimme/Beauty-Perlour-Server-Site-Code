import { Router } from "express";


const router = Router();

// Log in router 
router.post("/login")
// Log out route 
router.post("/logout")
// find accesstoken by refreshToken rotue
router.post("/refresh-token")
//google authentication
router.post("/google")
// reset password 
router.post("/reset-password")


export const AuthRouter = router;