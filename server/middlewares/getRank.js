const jwt = require('jsonwebtoken');

const getRank = (req, res, next) => {

  const token = req.headers.authorization;
  let user_rank=4;

  if (!token) {
    user_rank=4;
  }else{
    const decoded = jwt.verify(token, process.env.jwtPassword);
    user_rank = decoded.rank;
  }

  try {
    req.user_rank = user_rank; // Attach user data to request object for controllers
    next();
  } catch (err) {
    next();
  }
};


module.exports = { getRank };
