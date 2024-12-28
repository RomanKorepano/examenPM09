import { Schema, model } from 'mongoose'

const Users = new Schema({
    login: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String, 
        required: true
    }
});

export default model('Users', Users);