import { Button, Container } from "@mui/material";
import React from "react";

const BonosPage = () => {
  return (
    <Container maxWidth="lg" sx={{paddingY: '30px'}}>
      <Button variant='contained' color='success' sx={{backgroundColor: 'rgb(63 98 18)'}}>Add New Bonds</Button>
    </Container>
  );
};

export default BonosPage;
