import { Box, Button, Divider, Paper, Stack, TextField, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { useState } from "react";


export default function BlogDetails(){

    return <>
        <Paper sx={{ bgcolor: blue[50], py: 3, px: 3, mb: 4, borderRadius: "10px" }}>
            <Typography variant="h5" fontWeight={"500"} marginBottom={"4px"}>Blog Detail</Typography>
            <Typography>Nav</Typography>
        </Paper>

        {/* // main section */}
        <Paper sx={{  borderRadius: "10px" }} elevation={2}>
            <Box sx={{ py: 3, px: 3 }}>
                <Typography variant="h4" fontWeight={"500"} marginBottom={"4px"}>Streaming video way before it was cool, go dark tomorrow</Typography>
                <Typography>View 3201</Typography>
                <Typography>Comment 3</Typography>
            </Box>


            {/* <Divider sx={{ width: "100vw" }}></Divider> */}
            <Box sx={{ py: 3, px: 3, borderTop: "1px solid rgb(229, 234, 239)" }} >
                <Typography variant="h5" fontWeight={"500"} marginBottom={"4px"}>
                Title of the paragraph
                </Typography>
                <Typography>But you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</Typography>
                <Typography>Gigure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the</Typography>
            </Box>

            <Box sx={{ py: 3, px: 3, borderTop: "1px solid rgb(229, 234, 239)" }} >
                <Typography variant="h5" fontWeight={"500"} marginBottom={2}>Post Comments</Typography>

                <TextField
                    id="outlined-multiline-static"
                    fullWidth
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    // sx={{ border: "1px solid rgb(229, 234, 239)" }}
                />
                <Button variant="contained" sx={{ bgcolor: "rgb(93, 135, 255)", borderRadius: 2, marginTop: 3, marginBottom: 4 }}>Post Comment</Button>

                <Stack direction={"row"} spacing={2} alignItems={"center"} justifyContent={"start"} marginBottom={3}>
                    <Typography variant="h5" fontWeight={"500"} >Comments</Typography>

                    <Box bgcolor={ "rgb(236, 242, 255)" } color={"rgb(93, 135, 255)"} width={"min-content"} sx={{ px: "12px",  borderRadius: 1 }}>
                        <Typography variant="h6"  fontWeight={"500"} >3</Typography>
                    </Box>
                </Stack>


                <Typography>But you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</Typography>
                <Typography>Gigure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the</Typography>
            </Box>

        </Paper>
    </>
}