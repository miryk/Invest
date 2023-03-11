const { isObjectIdOrHexString } = require('mongoose');
const {Bonds} = require('../models/bonds.model');

module.exports.test = (req, res) => {
  res.json({message: "Backend is functioning from Bonds"})
}

module.exports.addBond = async (req, res) => {
  try {
    console.log(req.user)
    const newBond = await Bonds.create(req.body);
    res.json(newBond)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

module.exports.getUserBonds = async (req, res) => {
  try {
    console.log(req.user)
    userid = '6406546f38d4e924941e1eb1'
    const userBonds = await Bonds.find({userID: userid})
    res.json(userBonds)
  } catch (err) {
    res.status(400);
    res.json(err)
  }
} 