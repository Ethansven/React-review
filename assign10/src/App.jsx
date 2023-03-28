import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
import Content from "./components/Content";
import NavApp from "./components/Nav";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <NavApp />
      <Grid container direction="row" justifyContent="center" gap={3}>
        <Grid display={{ xs: "none", md: "block" }}>
          <Sidebar />
        </Grid>
        <Content />
        <Grid display={{ xs: "none", md: "block" }}>
          <Rightbar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
