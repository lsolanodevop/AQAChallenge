import { Request, Response } from "express";
import { User } from "../../models/user.model";
import { Message } from "../../models/message.model";

export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
        res.status(200).json({ message: "User logged in", user });
    } else {
        res.status(401).json({ message: "User not found" });
    }
}


export const registerUserDefaultConversation = async (req: Request, res: Response) => {
    const userMessages = [
        { username: "Leo", password: "leo", message: "I'm happy to be here!" },
        { username: "Chuck", password: "chuck", message: "What a great chat room" },
        { username: "Warren", password: "warren", message: "Indeed it's great!" },
    ];

    for (const userMessage of userMessages) {
        const user = new User({ username: userMessage.username, password: userMessage.password });
        await user.save();
        const id = user._id;;
        const newMessage = new Message({ message: userMessage.message, user: id }); 
        await newMessage.save();
    }

    res.status(200).json({ message: "Users registered: Leo, Chuck, Warren" });
};
