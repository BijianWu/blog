import { Box, Button, Chip, Divider, Paper, Stack, TextField, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { useState } from "react";
import StyledChip from "../components/StyledChip";
import { useNavigate } from "react-router-dom";

// not being used at all, but kept as a reference
export default function BlogDetails({imageUrl, title, dateString, tagLabel, tagUrl, mainContent }){

    const navigate = useNavigate();
    console.log(dateString);
    return <>


        <Paper sx={{  borderRadius: 3 }} elevation={2}>
            <img style={{objectFit: "fill", minHeight: "200px", width: "100%", aspectRatio: 2.5, borderTopLeftRadius: 6, borderTopRightRadius: 6}} src={imageUrl} alt=""/>
            <Box sx={{ py: 3, px: 3 }}>


                {/* <StypedSmallChip label="programming"  /> */}

                <Typography variant="h4" fontWeight={"600"} marginBottom={"4px"}>{title}</Typography>
                <StyledChip sx={{ fontSize: "12px", p: 1}} label={tagLabel} onClick= { () => navigate(tagUrl) } />
                <Typography mt={1}>posted on <Typography component={"span"} fontWeight={600} >{dateString}</Typography></Typography>
            </Box>


            {/* <Divider sx={{ width: "100vw" }}></Divider> */}
            <Box sx={{ py: 3, px: 3, borderTop: "1px solid rgb(229, 234, 239)" }} >
                {mainContent}
                {/* <Typography variant="h5" fontWeight={"500"} marginBottom={2}>
                Title of the paragraph
                </Typography>
                <Typography>But you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</Typography>
                <Typography>Gigure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the</Typography> */}
            </Box>

            <Box sx={{ py: 3, px: 3, borderTop: "1px solid rgb(229, 234, 239)" }} >

            </Box>

        </Paper>
    </>
}