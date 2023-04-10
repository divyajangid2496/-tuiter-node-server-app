import mongoose from "mongoose";

const schema = mongoose.Schema(
    {
        topic: String,
        userName: String,
        time: String,
        image: String,
        likes: Number,
        liked: Boolean,
        dislikes: Number,
        disliked: Boolean,
        replies: Number,
        retuits: Number,
        handle: String,
        tuit: String
    },
    {collection: 'tuits'});

export default schema;