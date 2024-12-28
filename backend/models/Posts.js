import { Schema, model } from 'mongoose'

const Posts = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String, 
        required: true
    },
});

export default model('Posts', Posts);