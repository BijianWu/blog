import { Box, Button, Chip, Divider, Paper, Stack, TextField, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { useState } from "react";
import StyledChip from "../components/StyledChip";
import { useNavigate } from "react-router-dom";
import StypedSmallChip from "../components/StypedSmallChip";

export default function BlogDetails(){

    const navigate = useNavigate();

    return <>
        {/* <Paper sx={{ bgcolor: blue[50], py: 3, px: 3, mb: 4, borderRadius: 4 }}>
            <Typography variant="h5" fontWeight={"500"} marginBottom={"4px"}>Blog Detail</Typography>

            <Typography>Nav</Typography>
        </Paper> */}

        {/* // main section */}
        <Paper sx={{  borderRadius: 3 }} elevation={2}>
            <img style={{objectFit: "fill", minHeight: "200px", width: "100%", aspectRatio: 3, borderTopLeftRadius: 6, borderTopRightRadius: 6}} src={require("../assets/images/book-open.jpg")} alt=""/>
            <Box sx={{ py: 3, px: 3 }}>


                {/* <StypedSmallChip label="programming"  /> */}

                <Typography variant="h4" fontWeight={"700"} marginBottom={"4px"}>Streaming video way before it was cool, go dark tomorrow</Typography>
                <StyledChip sx={{ fontSize: "12px", p: 1}} label="Frontend Development" onClick= { () => navigate("/tags/frontend-development") } />
            </Box>


            {/* <Divider sx={{ width: "100vw" }}></Divider> */}
            <Box sx={{ py: 3, px: 3, borderTop: "1px solid rgb(229, 234, 239)" }} >
                <Typography variant="h5" fontWeight={"500"} marginBottom={2}>
                Title of the paragraph
                </Typography>
                <Typography>But you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</Typography>
                <Typography>Gigure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the</Typography>
            </Box>

            <Box sx={{ py: 3, px: 3, borderTop: "1px solid rgb(229, 234, 239)" }} >

            </Box>

        </Paper>
    </>
}