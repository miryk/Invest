const mongoose = require('mongoose')

const BondsSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  issuingEntity: {
    type: String,
    required: [true, "An Issuing Entity is required"]
  }, 
  capitalInvested: {
    type: String,
    required: [true, "A capital is required"]
  }, 
  financialAsset:  {
    type: String,
    enum: ['Bond', 'Stock'],
    required: [true, "A category is required"]
  },
  term: {
    type: Number
  }, 
  nominalRate: {
    type: Number
  },
  operationDate: {
    type: Date
  }, 
  series: {
    type: String,
    required: [true, "Bond series is required"]
  }, 
  payments: {
    type: Array
  }
}, {
  timestamps: true
})

module.exports.Bonds = mongoose.model('Bonds', BondsSchema)