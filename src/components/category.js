import React from "react";
import { Box, Typography } from "@mui/material";
import headerStyle from "./Style";
import LocalImages from "../images";
import styled from "@emotion/styled";
import style from "./Style";


function Category() {
    return (
        <Box sx={style.Category}>
            <Box className="container">
                <Typography variant="h4" className="subtitle">OUR COURSE CATEGORIES</Typography>
                <Typography variant="h2" className="title">Top Most Unique Category</Typography>
                <Box className="inner_Category">
                    <Box className="cates">
                        <Box className="left">
                            <img src={LocalImages.SERVICEICON} alt="" />
                        </Box>
                        <Box className="right">
                            <Typography variant="h3" className="title">Over <span>18+</span>  Million Students </Typography>
                            <Typography className="subtitle">We provide online learning program that enable learners to access.</Typography>
                        </Box>
                    </Box>
                    <Box className="cates">
                        <Box className="left">
                            <img src={LocalImages.SERVICEICON1} alt="" />
                        </Box>
                        <Box className="right">
                            <Typography variant="h3" className="title">Over <span>18+</span>  Million Students </Typography>
                            <Typography className="subtitle">We provide online learning program that enable learners to access.</Typography>
                        </Box>
                    </Box>
                    <Box className="cates">
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
        </Box>
    );
}

export default Category;
