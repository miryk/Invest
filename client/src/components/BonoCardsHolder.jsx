import { Paper, IconButton, rgbToHex } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";

// Array for dummy data
// const bonos = [
//   {
//     issuingEntity: "Nucleo S.A.",
//     financialAsset: "Bono",
//     capitalInvested: "",
//     series: "PYNUC05",
//     term: 3600,
//     nominalRate: 8,
//     operationDate: "07/10/2022",
//     payment: [
//       {
//         date: "02/03/2023",
//         value: 595068,
//         typeOfPayment: "Interest",
//       },
//       {
//         date: "28/08/2023",
//         value: 588493,
//         typeOfPayment: "Interest",
//       },
//     ],
//   },
// ];

const BonoCardsHolder = ({ bonds, setBonds }) => {
  const navigate = useNavigate();
  // console.log("bonos",bonds);

  const deleteBond = async (id) => {
    try {
      const deleteOne = await axios.delete(
        `${import.meta.env.VITE_REACT_API_URL}/api/${id}`,
        { withCredentials: true }
      );
      if (deleteOne.status == 200) {
        Swal.fire({
          icon: "success",
          title: "Great!!!",
          text: `Bond deleted successfully!`,
        });
      }
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_API_URL}/api/bonds`,
        { withCredentials: true }
      );
      if (response.status == 200) {
        setBonds(response.data);
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const handleDelete = (id) => {
    try {
      Swal.fire({
        title: "Are you sure you want to delete this?",
        text: "It is irreversible",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "SI, eliminalo ahora!",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteBond(id);
        }
      });
    } catch (err) {
      console.log("error:", err);
    }
  };

  return (
    <div className="dashboard-portion my-12">
      {bonds && bonds.length > 0 ? (
        bonds.map((bond, idx) => {
          return (
            <Paper
              sx={{
                marginY: 2,
                padding: "15px",
                textAlign: "start",
                position: "relative",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#ededed",
                },
              }}
              elevation={1}
              key={"bond" + idx}
              // onClick={() => {
              //   console.log("Edit bond");
              //   navigate(`/bonos/${bond._id}/edit`);
              // }}
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
              <IconButton
                onClick={() => handleDelete(bond._id)}
                sx={{ position: "absolute", top: "3px", right: "3px" }}
              >
                <DeleteForeverIcon color="error" />
              </IconButton>
            </Paper>
          );
        })
      ) : (
        <Paper sx={{ margin: 2, padding: "10px" }}>
          <h1>You don't have bonds yet! Add and view here!</h1>
        </Paper>
      )}
    </div>
  );
};

export default BonoCardsHolder;
