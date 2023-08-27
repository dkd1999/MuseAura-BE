import express, { Router }  from "express";
import * as dotenv from 'dotenv';
import {v2 as cloudinary } from 'cloudinary';

import posts from "../models/postSchema.js"

dotenv.config()

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
// GET ALL POSTS
router.route('/').get(async(req,res)=>{
    try {
        const post = await posts.find()
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
})


// CREATE A POST
router.route('/').post(async(req,res)=>{
   try {
    const{name,prompt,photo} = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo)

    const newPost = await posts.create({
        name,
        prompt,
        photo:photoUrl.url
    })
    res.status(200).json({success:true , data: newPost})
   } catch (error) {
        res.status(500).json({success:false , message:error})
   }
})

export default router;