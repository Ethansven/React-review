import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, Link } from "@mui/material";
import "../styles/Nav.css";
import { Grid } from "@mui/material";


export default function NavApp() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        className="Nav"
        style={{ background: "#20232a" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>
          <Grid display={{xs:'none',md:'block'}}>
            <Button color="inherit">HOME</Button>
            <Button color="inherit">ABOUT</Button>
            <Button color="inherit">CONTACT</Button>
          </Grid>
          <Grid display={{xs:'block',md:'none'}}>
            <Button color="inherit"><MenuIcon></MenuIcon> </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
