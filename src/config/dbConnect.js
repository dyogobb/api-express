import mongoose from "mongoose";

async function connectDb() {

    mongoose.connect("mongodb+srv://mongodb:mongodb@cluster0.nvlxnlo.mongodb.net/livraria?retryWrites=true&w=majority")

    return mongoose.connection;
}

export default connectDb;

