import React from "react";
import { Box, Typography } from "@mui/material";
import headerStyle from "./Style";
import LocalImages from "../images";
import styled from "@emotion/styled";
import style from "./Style";


function Cards() {
    return (
        <Box className="cardsHolder">
            <Box sx={style.cards} className="container">
                <Box className="cards">
                    <Box className="left">
                        <img src={LocalImages.SERVICEICON} alt="" />
                    </Box>
                    <Box className="right">
                        <Typography variant="h3" className="title">Over <span>18+</span>  Million Students </Typography>
                        <Typography className="subtitle">We provide online learning program that enable learners to access.</Typography>
                    </Box>
                </Box>
                <Box className="cards">
                    <Box className="left">
                        <img src={LocalImages.SERVICEICON1} alt="" />
                    </Box>
                    <Box className="right">
                        <Typography variant="h3" className="title">Over <span>18+</span>  Million Students </Typography>
                        <Typography className="subtitle">We provide online learning program that enable learners to access.</Typography>
                    </Box>
                </Box>
                <Box className="cards">
                    <Box className="left">
                        <img src={LocalImages.SERVICEICON2} alt="" />
                    </Box>
                    <Box className="right">
                        <Typography variant="h3" className="title">Over <span>18+</span>  Million Students </Typography>
                        <Typography className="subtitle">We provide online learning program that enable learners to access.</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Cards;
