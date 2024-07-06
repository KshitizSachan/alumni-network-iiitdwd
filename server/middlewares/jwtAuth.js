const jwt = require('jsonwebtoken');
const jwtAuth = (req, res, next) => {
    const token = req.headers.authorization;// Extract token from header
    if (!token) {
      return res.status(404).json({ msg: "JWT token must be provided" });
    }

    try {
      const decoded = jwt.verify(token, process.env.jwtPassword);
      req.user = decoded; // Attach user data to request object for controllers
      next();
    } catch (err) {
      return res.status(401).json({ msg: "Invalid JWT token",error: err });
    }
  };

  const alumniVerify = (req, res, next) => {
    const token = req.headers.authorization; // Extract token from header



    if (!token) {
      return res.status(404).json({ msg: "JWT token must be provided" });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.jwtPassword);
      console.log('decoded:', decoded)

      if (decoded.rank == 3) {
        return res.status(403).json({ msg: "Unauthorized access" }); // 403 Forbidden
      }
      req.user = decoded; // Attach user data to request object for controllers
      next();
    } catch (err) {
      return res.status(401).json({ msg: "Invalid JWT token", error: err });
    }
  };

module.exports = { jwtAuth, alumniVerify };
