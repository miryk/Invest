import { Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const BonosPage = () => {
  return (
    <Container maxWidth="lg" sx={{paddingY: '30px'}}>
      <Link to='/bonos/new'><Button variant='contained' color='success' sx={{backgroundColor: 'rgb(63 98 18)'}}>Add New Bonds</Button></Link>
    </Container>
  );
};

export default BonosPage;
