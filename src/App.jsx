import { Button, Container, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import BlogDetails from "./blog/BlogDetails";
import TestReusableButton from "./components/TestReusableButton";
import BlogPost from "./blog/BlogPost";
import { theme } from "./Theme";
import BlogPosts from "./blog/BlogPosts";


export default function App(){

    return <>
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
                {/* <BlogDetails /> */}
                <BlogPosts />
            </Container>
        </ThemeProvider>


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