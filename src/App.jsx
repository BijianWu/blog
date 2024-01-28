import { Button, Container, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import BlogDetails from "./blog/BlogDetails";
import TestReusableButton from "./components/TestReusableButton";
import BlogPost from "./blog/BlogPost";
import { theme } from "./Theme";
import BlogPosts from "./blog/BlogPosts";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Tags from "./pages/Tags";
import Archives from "./pages/Archives";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TagDetailsRouter from "./pages/TagDetailsRouter";
import EmptyLayout from "./pages/EmptyLayout";
import BlogDetailsRouter from "./blog/BlogDetailsRouter";

export default function App(){

    return <>
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<BlogPosts/>} />
                    <Route path="posts/:postTitle" element={<BlogDetailsRouter/>} />
                    <Route path="tags" element={<EmptyLayout />} >
                        <Route index element={<Tags />} />
                        <Route path=":tagName" element={<TagDetailsRouter />} />
                    </Route>
                    <Route path="archives" element={<Archives/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="contact" element={<Contact/>} />
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