import JsonWebTokenError from "jsonwebtoken";

const SECRET = "";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Acesso negado!" });
  }

  JsonWebTokenError.verify(token, SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido!" });
    }
    
    req.user = user; // Armazena as infos do usuário dentro do req
    next(); // deixa a requisição seguir para a rota protegida
  });
};

export default verifyToken;