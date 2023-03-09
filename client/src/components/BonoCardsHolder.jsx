import React from 'react'

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
  return (
    <div>

    </div>
  )
}

export default BonoCardsHolder