import { Request, Response } from "express";
import { Message } from "../../models/message.model";
import { User } from "../../models/user.model";

export const getMessages = async (req: Request, res: Response) => {
    try {
        const messages = await Message.find().populate('user', 'username');
        if (messages) {
            res.status(200).json(messages);
        } else {
            res.status(404).json({ message: "No se encontraron mensajes" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los mensajes", error });
    }
}