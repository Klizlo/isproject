import * as React from 'react';
import Box from '@mui/material/Box';
import {Button, ButtonGroup} from "@mui/material";
import {useNavigate} from "react-router-dom";

const NavBar = (sites) => {


    const navigate = useNavigate();
    return (
        <Box sx={{width: '100%'}}>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                {sites.sites.map((site) => {
                    if (site.visible) {
                        return (
                            <Button key={site.name} onClick={() => {
                                navigate(site.link)
                            }
                            }>{site.name}</Button>
                        );
                    }
                })}
            </ButtonGroup>
        </Box>
    );
};

export default NavBar