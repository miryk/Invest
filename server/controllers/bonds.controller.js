const { isObjectIdOrHexString } = require('mongoose');
const {Bonds} = require('../models/bonds.model');

module.exports.test = (req, res) => {
  res.json({message: "Backend is functioning from Bonds"})
}

module.exports.addBond = async (req, res) => {
  try {
    const {userID, issuingEntity, financialAsset, capitalInvested, series, term, nominalRate, operationDate, payments } = req.body
    // console.log(userID)
    console.log(req.user._id)
    const newBond = await Bonds.create({
      userID: req.user._id,
      issuingEntity: issuingEntity,
      financialAsset: financialAsset,
      capitalInvested: capitalInvested,
      series: series,
      term: term, 
      nominalRate: nominalRate,
      operationDate: operationDate,
      payments: payments
    });

    res.json(newBond)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

module.exports.getUserBonds = async (req, res) => {
  try {
    console.log(req.user)
    // userid = '6406546f38d4e924941e1eb1'
    const userBonds = await Bonds.find({userID: req.user._id}).sort({ operationDate: 1 })
    res.json(userBonds)
  } catch (err) {
    res.status(400);
    res.json(err)
  }
} 