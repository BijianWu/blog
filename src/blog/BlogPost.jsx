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

    <Card  elevation={1} sx={{ maxWidth: 360, borderRadius: "7px", transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms", boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px" }}>
      <CardMedia
        sx={{ height: 250 }}
        image={require("../assets/images/book-open.jpg")}
        title="open book"
      />
      <CardContent sx={{ p: 4 }}>
        <Chip label="programming" sx={{ height:"24px",  marginTop: -1,  marginBottom: 2,  color: "rgb(42, 53, 71)", fontWeight:"600", display: "inline-flex", alignItems: "center", justifyContent: "center", '& .MuiChip-label': {paddingLeft: 1, paddingRight: 1, fontSize: "12px", height: "18px", verticalAlign: "center"}}}  />
        <Typography variant="h6" fontWeight={"bold"} fontSize={"1.125rem"} color={"rgb(42, 53, 71)"} marginBottom={2}>Early Black Friday Amazon deals: cheap TVs, headphones, laptops</Typography>
        <Stack direction={"row"} justifyContent={"start"} alignItems={"center"} spacing={1} >
            <CalendarMonthIcon/>
            <Typography variant="body1"  fontSize={"0.775rem"} color={"rgb(42, 53, 71)"} fontWeight={400}  >Nov, 11, 2023</Typography>
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