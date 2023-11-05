import { Button, Container, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import BlogDetails from "./blog/BlogDetails";
import TestReusableButton from "./components/TestReusableButton";
import BlogPost from "./blog/BlogPost";
import { theme } from "./Theme";
import BlogPosts from "./blog/BlogPosts";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";


export default function App(){

    return <>
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<BlogPosts/>} />
                    <Route path="about" element={<About/>} />
                </Route>
            </Routes>

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