import React from "react";
import { Box } from "@mui/material";
import headerStyle from "./Style";
import LocalImages from "../images";
import styled from "@emotion/styled";
import style from "./Style";


function Header() {
    return (
        <Box sx={style.headerStyle}>
            <Box className="container">
                <Box sx={style.innerheaderStyle}>
                    <Box className="logo">
                        <img src={LocalImages.LOGO_TA} alt="" />
                    </Box>
                    <Box className="manu">
                        Header
                    </Box>
                    <Box className="form_field">Login</Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Header;
