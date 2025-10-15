import db from "../db/connection.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const registerUser = (req, res) => {
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
  const valid = bcrypt.compareSync(password, user.password);
  if(!valid) return res.status(400).json({message: "Senha incorreta"});

  const token = jwt.sign({id:user.id, username: user.name }, process.env.JWT_SECRET, { expiresIn: "2h" }); 

    res.json({message: "Login bem-sucedido", token});
  });
};

const SECRET = "chave-secreta";

export const loginUser = async (req, res) => {
  const {email, password} = req.body;

  try {
    const [rows] = await db.promise().query("SELECT * FROM users WHERE email = ?", [email]);
    const user = rows[0];

    if (!user) {
      return res.status(400).json({message: "Usuário não encontrado"});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({message: "Senha incorreta"});
    }

    const token = jwt.sign({id: user.id, username: user.username}, SECRET, {expiresIn: "1h"});

    res.status(200).json({
      message: "Login bem-sucedido",
      token,
      user: {id: user.id, username: user.username, email: user.email}
    })
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: "Erro ao fazer login"});
  }
} 