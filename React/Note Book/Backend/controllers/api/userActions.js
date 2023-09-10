const User = require('../../db/models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secret';


class UserActions {    
    async registerUser(req, res) {
        const { nickname, password} = req.body;
        const encryptedPassword =  await bcrypt.hash(password, 10);
        try {
            const userCheck = await User.findOne({ nickname });
            if (userCheck) {
                return res.json({ status: 401, error: "User Exists" });
              }
              await User.create({                
                nickname,
                password: encryptedPassword
              });
              return res.json({status: 201});
        } catch (error) {
            return res.status(422).json({error: error.message});
        }        
    }
    async loginUser(req, res) {
        const { nickname, password } = req.body;        
        
        try {
            const user = await User.findOne({ nickname });
            if (!user) {
                return res.json({ status: 401, error: "User not found"});
            }
            if (await bcrypt.compare(password, user.password)) {
                const token = jwt.sign({ nickname: user.nickname }, JWT_SECRET, {
                    expiresIn: "15m"});

                if (res.status(201)) {                    
                    return res.json({ status: "ok", data: token });
                }              
            }
            else{
              return res.json({ status: 401, error: "Invalid password" });};
            
        } catch (error) {
            return res.status(401).json({error: "Invalid Nickname or Password"});
        }
    }
    async getUserData (req, res) {
        const { token } = req.body;
        try {
          const user = jwt.verify(token, JWT_SECRET, (err, res) => {
            if (err) {
              return "token expired";
            }
            return res;
          });
          
          if (user == "token expired") {
            return res.send({ status: "error", data: "token expired" });
          }
      
          const userNickname = user.nickname;
          User.findOne({ nickname: userNickname })
            .then((data) => {
              res.send({ status: "ok", data: data });
            })
            .catch((error) => {
              res.send({ status: "error", data: error });
            });
        } catch (error) {return res.status(500).json({error: error.message}) }
      };
};

module.exports = new UserActions();