import { Box, Container, Fab, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import BonoCardsHolder from "../components/BonoCardsHolder";
import AddIcon from "@mui/icons-material/Add";
import { Link, useNavigate } from "react-router-dom";
import GeneralGraph from "../components/GeneralGraph";
import axios from "axios";

const Dashboard = () => {
  const [bonds, setBonds] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_API_URL}/api/bonds`, {withCredentials: true}
        );
        if (response.status == 200) {
          setBonds(response.data);
          // console.log(response.data)
        }
      } catch (err) {
        console.log(err);
        navigate("/login");
      }
    };
    getData();
  }, []);

  return (
    <Box
      sx={{ display: "flex", textAlign: "center", paddingX: '40px'}}
    >
      <Paper elevation={5} sx={{ flex: 1, padding: 4, margin: '20px', bgcolor: 'white' }}>
        <Typography variant="h4" component="h6">
          Your Bonds
        </Typography>
        <BonoCardsHolder bonds={bonds}/>
      </Paper>
      <Paper elevation={5} sx={{ flex: 2, padding: 4, margin: '20px', bgcolor: 'white' }}>
        <Typography variant="h4" component="h6">
          General View 
        </Typography>
        <GeneralGraph bonds={bonds}/>
      </Paper>
      <Fab
        color="success"
        variant="extended"
        aria-label="add"
        sx={{ bottom: "30px", right: "30px", position: "fixed" }}
      >
        <Link to="/bonos/new" className="flex items-center">
          <AddIcon />
          <p>Add</p>
        </Link>
      </Fab>
    </Box>
  );
};

export default Dashboard;
