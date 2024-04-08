import React from "react";
import { Box, Button, Divider, IconButton, InputBase, Paper, Typography } from "@mui/material";
import LocalImages from "../images";
import style from "./Style";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';


function Banner() {
    return (
        <Box sx={style.banner}>
            <Box className="bannerLeft">
                <Typography variant="h4" className="subheading">Make Sustainable Futures,</Typography>
                <Typography variant="h1" className="heading">Best Digital Online Education<span>!</span></Typography>
                <Typography variant="p" className="para">Through our initiatives, we aim to bridge educational gap improve learning outcome, and foster a love for lifelong learning.</Typography>

                <Box sx={style.inputField}>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >

                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Google Maps"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <Button className="btn"><span>Search Now</span> </Button>

                    </Paper>
                </Box>
            </Box>
            <Box className="bannerRight">
                <img className="rightBanner" src={LocalImages.BANNER} alt="" />
                <Box className="spin">
                    <img className="spinimg" src={LocalImages.SPIN} alt="" />
                </Box>

            </Box>

        </Box>
    );
}

export default Banner;
