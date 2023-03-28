import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import "../styles/Content.css";
import { Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ye from "../assests/ye.jpg";

export default function Content() {
  return (
    <Box sx={{ width: "800px" }}>
      <Grid>
        <h1>Welcome to My Website</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores,
          rem omnis reiciendis est laudantium hic quos error, quia impedit quasi
          facere perferendis! Aspernatur enim illo iste impedit corporis
          laborum. Delectus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores,
          rem omnis reiciendis est laudantium hic quos error, quia impedit quasi
          facere perferendis! Aspernatur enim illo iste impedit corporis
          laborum. Delectus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores,
          rem omnis reiciendis est laudantium hic quos error, quia impedit quasi
          facere perferendis! Aspernatur enim illo iste impedit corporis
          laborum. Delectus.
        </p>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card className="Card" >
            <CardMedia sx={{ height: 140 }} image={ye} title="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Card Title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, rem omnis reiciendis est laudantium hic quos error,
                quia impedit quasi facere perferendis! Aspernatur enim illo iste
                impedit corporis laborum. Delectus.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item  xs={12} sm={6}>
          <Card className="Card" >
            <CardMedia sx={{ height: 140 }} image={ye} title="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Card Title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, rem omnis reiciendis est laudantium hic quos error,
                quia impedit quasi facere perferendis! Aspernatur enim illo iste
                impedit corporis laborum. Delectus.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} >
          <Card className="Card" >
            <CardMedia sx={{ height: 140 }} image={ye} title="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Card Title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, rem omnis reiciendis est laudantium hic quos error,
                quia impedit quasi facere perferendis! Aspernatur enim illo iste
                impedit corporis laborum. Delectus.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
