import { Button, Container, Grid, ThemeProvider, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";

import BlogPost from "./BlogPost";
import BridgeDesignPattern from "../pages/blogs/november_28_2023/BridgeDesignPatternBlogDetails";
import BridgeDesignPatternBlogPost from "../pages/blogs/november_28_2023/BridgeDesignPatternBlogPost";

export default function BlogPosts(){
    const theme = useTheme();
    const lgMatches = useMediaQuery(theme.breakpoints.up('lg'));
    const mdMatches = useMediaQuery(theme.breakpoints.up('md'));
    return <>
    <Grid container spacing={lgMatches ? 10 : 3}>
        <Grid item xl={4} md={6} xs={12} display={mdMatches ? "" : "flex"} justifyContent={"center"} alignItems={"center"}>
            <BridgeDesignPatternBlogPost />
        </Grid>
        <Grid item xl={4} md={6} xs={12} display={mdMatches ? "" : "flex"} justifyContent={"center"} alignItems={"center"}>
            <BridgeDesignPatternBlogPost />
        </Grid>
        <Grid item xl={4} md={6} xs={12} display={mdMatches ? "" : "flex"} justifyContent={"center"} alignItems={"center"}>
            <BridgeDesignPatternBlogPost />
        </Grid>
        {/* <Grid item xl={4} md={6} xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <BlogPost />
        </Grid>
        <Grid item xl={4} md={6} xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <BlogPost />
        </Grid> */}

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