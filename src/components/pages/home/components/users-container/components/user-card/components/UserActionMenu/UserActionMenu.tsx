import React from 'react';
import { Lock, MoreVert } from '@mui/icons-material';
import { Button, IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { LANGUAGE } from 'src/assets/language';

const UserActionMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton aria-label='settings'></IconButton>

            <Button
                id='basic-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                color='info'
                onClick={handleClick}
            >
                <MoreVert />
            </Button>
            <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                <MenuItem>{LANGUAGE.ENG.home.usercard.actions.profile}</MenuItem>

                <MenuItem>
                    <ListItemIcon>
                        <Lock fontSize='small' color='error' />
                    </ListItemIcon>
                    <ListItemText>{LANGUAGE.ENG.home.usercard.actions.lockUser}</ListItemText>
                </MenuItem>
            </Menu>
        </>
    );
};

export default UserActionMenu;
