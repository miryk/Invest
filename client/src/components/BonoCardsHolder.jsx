import { Paper } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
        typeOfPayment: "Interest",
      },
      {
        date: "28/08/2023",
        value: 588493,
        typeOfPayment: "Interest",
      },
    ],
  },
];

const BonoCardsHolder = ({ bonds }) => {
  return (
    <div className="dashboard-portion my-12">
      {bonds && bonds.length > 0 ?
        bonds.map((bond, idx) => {
          return (
            <Paper
              sx={{ marginY: 2, padding: "15px", textAlign: 'start' }}
              elevation={1}
              key={"bond" + idx}
            >
              <div>
                <span className="font-bold">Issuing Entity: </span>
                <span>{bond.issuingEntity}</span>
              </div>
              <div>
                <span className="font-bold">Operation Date: </span>
                <span>{bond.operationDate.slice(0, 10)}</span>
              </div>
              <div>
                <span className="font-bold">Capital Invested: </span>
                <span>{bond.capitalInvested} Gs</span>
              </div>
            </Paper>
          );
        })
      :
      <Paper
        sx={{ margin: 2, padding: '10px'}}
      >
        <h1>You don't have bonds yet! Add and view here!</h1>
      </Paper>
      }
    </div>
  );
};

export default BonoCardsHolder;
