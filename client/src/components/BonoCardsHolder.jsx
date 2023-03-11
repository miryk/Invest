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

const BonoCardsHolder = () => {
  const [bonds, setBonds] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${import.meta.env.VITE_REACT_API_URL}/api/bonds`)
      setBonds(response.data)
    }
  getData()
  
  }, [])

  return (
    <div>
    {bonds && bonds.map((bond, idx) =>{
      return (
        <Paper sx={{marginY: 2}} key={"bond"+idx}>
          <h1>{bond.issuingEntity}</h1>
          <h2>{bond.operationDate}</h2>
        </Paper>
      )
    })}

    </div>
  )
}

export default BonoCardsHolder