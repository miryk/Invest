import { Container, Fab, Typography } from "@mui/material";
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
          console.log(response.data)
        }
      } catch (err) {
        console.log(err);
        navigate("/login");
      }
    };
    getData();
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", textAlign: "center", gap: 3 }}
    >
      <Container sx={{ bgcolor: "gray", flex: 1 }}>
        <Typography variant="h6" component="h6">
          Tus bonos
        </Typography>
        <BonoCardsHolder bonds={bonds}/>
      </Container>
      <Container sx={{ bgcolor: "pink", flex: 2 }}>
        <Typography variant="h6" component="h6">
          Vista general
        </Typography>
        <GeneralGraph />
      </Container>
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
    </Container>
  );
};

export default Dashboard;
