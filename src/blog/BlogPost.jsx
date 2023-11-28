import { Button, Card, CardActions, CardContent, CardMedia, Chip, Container, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useNavigate } from "react-router-dom";
import StypedSmallChip from "../components/StypedSmallChip";
import StypedDisplayOnlySmallChip from "../components/StypedDisplayOnlySmallChip";

export default function BlogPost({imageUrl, title, dateString, route}){
    const navigate = useNavigate();
    return <>

    <Card onClick={ () => navigate(`posts/${route}`) } elevation={1} sx={{  minWidth: "90%" ,transition: "transform 0.3s ease-in-out", "&:hover": { transform: "scale3d(1.05, 1.05, 1)", boxShadow: "rgba(236, 175, 114, 1) 0px 0px 8px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px" },     maxWidth: 400, borderRadius: 1, transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms", boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px" }}>
      <CardMedia
        sx={{ height: 250 }}
        image={imageUrl}
        title={title}
      />
      <CardContent sx={{ p: 4 }}>
        {/* <Chip label="programming" sx={{ height:"24px",  marginTop: -1,  marginBottom: 2,  color: "rgb(42, 53, 71)", fontWeight:"600", display: "inline-flex", alignItems: "center", justifyContent: "center", '& .MuiChip-label': {paddingLeft: 1, paddingRight: 1, fontSize: "12px", height: "18px", verticalAlign: "center"}}}  /> */}

        <Typography variant="h6" fontWeight={"bold"} fontSize={"1.125rem"} color={"rgb(42, 53, 71)"} marginBottom={2}>{title}</Typography>
        <StypedDisplayOnlySmallChip clickable={false} sx={{ height:"24px", marginTop: -1,  marginBottom: 3 }} label="programming"  />
        <Stack direction={"row"} justifyContent={"start"} alignItems={"center"} spacing={1} >
            <CalendarMonthIcon/>
            <Typography variant="body1"  fontSize={"0.775rem"} color={"rgb(42, 53, 71)"} fontWeight={400}  >{dateString}</Typography>
        </Stack>
      </CardContent>

    </Card>

    </>
}