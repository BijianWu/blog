import { Box, Button, Chip, Divider, Paper, Stack, TextField, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { useState } from "react";
import StyledChip from "../components/StyledChip";
import { useNavigate, useParams } from "react-router-dom";
import BridgeDesignPatternBlogDetails from "../pages/blogs/november_28_2023/BridgeDesignPatternBlogDetails";
import SingleResponsibilityBlogDetails from "../pages/blogs/november_29_2023/SingleResponsibilityBlogDetails";

export default function BlogDetailsRouter(){
    const { postTitle } = useParams();

    if(postTitle === "single-responsibility") {
        return <SingleResponsibilityBlogDetails />
    } else if(postTitle === "bridge-design-pattern") {
        return <BridgeDesignPatternBlogDetails />
    }

    return "no yet released";

}