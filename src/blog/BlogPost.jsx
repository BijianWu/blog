import { Button, Card, CardActions, CardContent, CardMedia, Chip, Container, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export default function BlogPost(){

    return <>
        {/* <Paper elevation={1}>
            <Chip label="primary"  />
            <Typography variant="h5" fontWeight={"500"} marginBottom={2}>Early Black Friday Amazon deals: cheap TVs, headphones, laptops</Typography>

            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={1} >
                <CalendarMonthIcon/>
                <Typography variant="body"  >Nov, 11, 2023</Typography>
            </Stack>

            
        </Paper> */}

    <Card sx={{ maxWidth: 360, borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
      <CardMedia
        sx={{ height: 250 }}
        image={require("../assets/images/book-open.jpg")}
        title="open book"
      />
      <CardContent>
        <Chip label="programming" sx={{ marginTop: 1, marginBottom: 2, fontSize: "13px", color: "rgb(42, 53, 71)", fontWeight:"600" }}  />
        <Typography variant="h6" fontWeight={"bold"} fontSize={"1.125rem"} color={"rgb(42, 53, 71)"} marginBottom={2}>Early Black Friday Amazon deals: cheap TVs, headphones, laptops</Typography>
        <Stack direction={"row"} justifyContent={"start"} alignItems={"center"} spacing={1} >
            <CalendarMonthIcon/>
            <Typography variant="body"  fontSize={"0.875rem"} color={"rgb(42, 53, 71)"} fontWeight={400}  >Nov, 11, 2023</Typography>
        </Stack>
      </CardContent>

    </Card>
    
        {/* <Container maxWidth="md"> */}
            {/* <BlogDetails /> */}
        {/* </Container> */}

        {/* <h1>hi there</h1> */}
         {/* <Nav/>     */}
         {/* <Routes>
            <Route path="/">

            </Route>
        </Routes>  */}
         {/* <SelectElement />
        <div>Hello world</div>
        <Button variant="contained">Hello world</Button> */}
    </>
}