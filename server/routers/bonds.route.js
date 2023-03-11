const BondsController = require('../controllers/bonds.controller');

module.exports = app => {
  app.get('/api/test', BondsController.test);
  app.post('/api/newbond', BondsController.addBond);
  app.get('/api/bonds', BondsController.getUserBonds)
}