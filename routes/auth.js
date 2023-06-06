const express = "express";
const loginController = "../controller/auth.js";

const router = Router();

router.post("/", loginController.loginUser);

model.export = router;
