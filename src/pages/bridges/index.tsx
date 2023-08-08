import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Map from "./Map";

function TopLeftGrid() {
  return <Box sx={{ bgcolor: "#cfe8fc", height: "8vh" }}>Foo</Box>;
}

function TopCenterGrid() {
  return <Box sx={{ bgcolor: "#cfe8fc", height: "8vh" }}>Bar</Box>;
}

function TopRightGrid() {
  return <Box sx={{ bgcolor: "#cfe8fc", height: "8vh" }}>Baz</Box>;
}

function MiddleLeftGrid() {
  return <Box sx={{ bgcolor: "#cfe8fc", height: "82vh" }}>Foo</Box>;
}

function MiddleCenterGrid() {
  return (
    <Box sx={{ bgcolor: "#cfe8fc", height: "82vh" }}>
      <div
        style={{
          height: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Map />
      </div>
    </Box>
  );
}

function MiddleRightGrid() {
  return <Box sx={{ bgcolor: "#cfe8fc", height: "82vh" }}>Bar</Box>;
}

function BottomLeftGrid() {
  return <Box sx={{ bgcolor: "#cfe8fc", height: "8vh" }}>Foo</Box>;
}

function BottomCenterGrid() {
  return <Box sx={{ bgcolor: "#cfe8fc", height: "8vh" }}>Bar</Box>;
}

function BottomRightGrid() {
  return <Box sx={{ bgcolor: "#cfe8fc", height: "8vh" }}>Baz</Box>;
}

export default function Bridges() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false}>
        <Grid container spacing={0.5}>
          <Grid container item xs={12} spacing={0.5}>
            <Grid item xs={2}>
              <TopLeftGrid />
            </Grid>
            <Grid item xs={8}>
              <TopCenterGrid />
            </Grid>
            <Grid item xs={2}>
              <TopRightGrid />
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={0.5}>
            <Grid item xs={2}>
              <MiddleLeftGrid />
            </Grid>
            <Grid item xs={8}>
              <MiddleCenterGrid />
            </Grid>
            <Grid item xs={2}>
              <MiddleRightGrid />
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={0.5}>
            <Grid item xs={2}>
              <BottomLeftGrid />
            </Grid>
            <Grid item xs={8}>
              <BottomCenterGrid />
            </Grid>
            <Grid item xs={2}>
              <BottomRightGrid />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
