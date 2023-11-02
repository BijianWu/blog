import { Button, Container } from "@mui/material";
import React, { useState } from "react";
import BlogDetails from "./blog/BlogDetails";
import TestReusableButton from "./components/TestReusableButton";


export default function App(){

    return <>
        <Container maxWidth="md">
            {/* <BlogDetails /> */}
            <TestReusableButton sx={{p:3} } disableRipple> Button</TestReusableButton>
        </Container>

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