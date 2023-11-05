import { Button, Container, Grid, ThemeProvider } from "@mui/material";
import React, { useState } from "react";

import BlogPost from "./BlogPost";



export default function BlogPosts(){

    return <>
    <Grid container spacing={5}>
        <Grid item xl={4} md={6} xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <BlogPost />
        </Grid>
        <Grid item xl={4} md={6} xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <BlogPost />
        </Grid>
        <Grid item xl={4} md={6} xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <BlogPost />
        </Grid>

    </Grid>
         


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