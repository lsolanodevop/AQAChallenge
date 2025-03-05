import { Request, Response } from "express";
import { Message } from "../../models/message.model";

export const postMessage = async (req: Request, res: Response) => {
    const { message, user } = req.body;
    const newMessage = new Message({ message, user });
    await newMessage.save();
    if (newMessage) {
        res.status(200).json({ message: "Message sent", newMessage });
    } else {
        res.status(400).json({ message: "Error sending message" });
    }
}


