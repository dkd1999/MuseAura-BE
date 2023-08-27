import mongoose from 'mongoose'

const connectDB = (url) => {
    mongoose.set('strictQuery', true)
    mongoose.connect(url)
    .then(() => console.log('MOngo db connected'))
    .catch((err) => console.log(err))
}

export default connectDB

// const connectionString = process.env.DATABASE

// mongoose.connect(connectionString,{
//     useUnifiedTopology:true,
//     useNewUrlParser:true
// }).then(()=>{
//     console.log('MongoDB connection successfull');
// }).catch(()=>{
//     console.log('Error connecting to mongodb');
// })