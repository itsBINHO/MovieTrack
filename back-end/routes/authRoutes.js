import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get("/dashboard", verifyToken, (req, res) => {
  res.json({
    message: `Bem-vindo ao dashboard, ${req.user.email}!`,
  });
});

export default router;
