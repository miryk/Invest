import { Paper } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const bonos = [
  {
    issuingEntity: "Nucleo S.A.",
    financialAsset: "Bono",
    capitalInvested: "",
    series: "PYNUC05",
    term: 3600,
    nominalRate: 8,
    operationDate: "07/10/2022",
    payment: [
      {
        date: "02/03/2023",
        value: 595068,
        typeOfPayment: "Interest"
      }, {
        date: "28/08/2023",
        value: 588493,
        typeOfPayment: "Interest"
      }
    ]
  }
]

const BonoCardsHolder = ({bonds}) => {

  return (
    <div>
    {bonds && bonds.map((bond, idx) =>{
      return (
        <Paper sx={{marginY: 2}} key={"bond"+idx}>
          <div>
          <span>Issuing Entity: </span><span>{bond.issuingEntity}</span>
          </div>
          <div>
          <span>Operation Date: </span><span>{bond.operationDate}</span>
          </div>
        </Paper>
      )
    })}

    </div>
  )
}

export default BonoCardsHolder