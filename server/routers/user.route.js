const passport = require("passport");
const UserController = require("../controllers/user.controller");
const { isAuth } = require("./authMiddleware");

module.exports = (app) => {
  app.post("/api/register", UserController.createUser);
  app.post("/api/login", UserController.loginUser);
  app.delete("/api/logout", isAuth, UserController.logoutUser);
  // app.get("/api/session", UserController.session)
}