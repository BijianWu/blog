import { Button, Container, styled } from "@mui/material";
import React, { useState } from "react";
// import BlogDetails from "./blog/BlogDetails"
import { deepOrange } from "@mui/material/colors";

// used as an example of how to customize the Materail UI components
const TestReusableButton = styled(Button) (() => ({
    backgroundColor: deepOrange[100]
}));

export default TestReusableButton;