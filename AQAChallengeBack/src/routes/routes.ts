import { Router } from "express";
import { getMessages } from "../controllers/messages/getMessages";
import { postMessage } from "../controllers/messages/postMessage";
import { loginUser, registerUserDefaultConversation } from "../controllers/user/loginUser";

const router = Router();

router.post('/login', loginUser);
router.post('/message', postMessage);
router.get('/messages', getMessages);
router.get('/register', registerUserDefaultConversation);

export default router;

