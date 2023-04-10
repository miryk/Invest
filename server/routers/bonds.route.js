const passport = require("passport");
const BondsController = require("../controllers/bonds.controller");
const { isAuth } = require("./authMiddleware");

module.exports = (app) => {
  app.get("/api/test", BondsController.test);
  app.post("/api/newbond", isAuth, BondsController.addBond);
  app.get("/api/bonds", isAuth, BondsController.getUserBonds);
  app.get("/api/:id", isAuth, BondsController.getBond);
  app.delete("/api/:id", isAuth, BondsController.deleteBond);
};
