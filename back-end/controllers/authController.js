import db from "../db/connection.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const register = (req, res) => {
  const {username, email, password} = req.body;

  if (!username || !email || !password) 
    return res.status(400).json({message: "Preencha todos os campos"});
  
  const hashedPassword = bcrypt.hashSync(password, 10);

  const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  db.query(sql, [username, email, hashedPassword], (err) => {
    if (err) return res.status(500).json({message: "Erro ao registrar"});
    res.status(201).json({message: "Usuário registrado com sucesso"});
  });
};

export const login = (req, res) => {
  const {email, password} = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if(err) return res.status(500).json({message: "Erro ao fazer login"});
    if(results.length === 0) return res.status(404).json({message: "Usuário não encontrado"});

  const user = results[0];
  const valid = bcrypt.ccmpareSync(password, user.password);
  if(!valid) return res.status(400).json({message: "Senha incorreta"});

  const token = jwt.sign({id:user.id, username: user.name }, process.env.JWT_SECRET, { expiresIn: "2h" }); 

    res.json({message: "Login bem-sucedido", token});
  });
};