import { Container, Fab, Typography } from "@mui/material";
import React from "react";
import BonoCardsHolder from "../components/BonoCardsHolder";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", textAlign: "center", gap: 3 }}
    >
      <Container sx={{ bgcolor: "gray", flex: 1 }}>
        <Typography variant="h6" component="h6">
          Tus bonos
        </Typography>
        <BonoCardsHolder />
      </Container>
      <Container sx={{ bgcolor: "pink", flex: 2 }}>
        <Typography variant="h6" component="h6">
          Vista general
        </Typography>
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
