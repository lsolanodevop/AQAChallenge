import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    message: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
});

export const Message = mongoose.model('Message', messageSchema);