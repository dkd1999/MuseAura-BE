const posts = require("../models/postSchema")
import { Configuration,OpenAIApi } from "openai"
import('dotenv').config()

const configuration = new Configuration({
    apiKey:process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

exports.dalleRoutes = async(req,res)=>{
    res.send("Hello from DALL-E")
}