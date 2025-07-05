const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if Authorization header is present
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1]; // Get the token after "Bearer"

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Attach user payload (id, role, etc.) to request
    next(); // Continue to route
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token." });
  }
};

module.exports = authMiddleware;
