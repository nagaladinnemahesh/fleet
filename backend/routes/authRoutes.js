import express, { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// for register

router.post("/register", async(req, res) => {
    try{
        const {username, password} = req.body;

        // checking if user exists

        const existingUser = await User.findOne({username});
        if (existingUser) return res.status(400).json({message: "User already exists"});

        // hasing password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // saving a new user

        const newUser = new User({username, password: hashedPassword});
        await newUser.save();

        res.status(201).json({message: "user registered successfully"});
    } catch(err){
        res.status(500).json({message: "Server Error"})
    }
});


router.post("/login", async (req, res) => {
    try {
        const {username, password} = req.body;

        // find user
        const user = await User.findOne({username});
        if (!user) return res.status(400).json({message: "Invalid Username"});

        // check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({message: "Invalid password"});

        // create JWT token
        const token = jwt.sign({id: user._id}, "secretkey",{expiresIn: "1h"});
        res.json({token});
    } catch(err){
        res.status(500).json({message: "Server Error"})
    }
});

export default router;