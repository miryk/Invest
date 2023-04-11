import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import axios from "axios";
import Swal from "sweetalert2";



const BonoCard = ({ bond, setBonds }) => {
  const [hover, setHover] = useState(false);

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
        text: "You can't reverse this",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
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
    <Paper
      sx={{
        marginY: 2,
        padding: "15px",
        textAlign: "start",
        position: "relative",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#f5f5f5",
          border: "1px solid black",
        },
      }}
      elevation={1}
      // key={"bond" + idx}
      onMouseEnter={(e) => setHover(true)}
      onMouseLeave={(e) => setHover(false)}
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
      {hover && (
        <IconButton
          onClick={() => handleDelete(bond._id)}
          sx={{ position: "absolute", top: "3px", right: "3px" }}
        >
          <DeleteForeverIcon
            color="error"
            sx={{
              color: "rgba(244, 67, 54, .7)",
              "&:hover": {
                color: "rgb(244,67,54)",
              },
            }}
          />
        </IconButton>
      )}
    </Paper>
  );
};

export default BonoCard;
