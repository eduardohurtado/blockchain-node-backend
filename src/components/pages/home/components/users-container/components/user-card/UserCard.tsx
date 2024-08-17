import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { deepPurple } from '@mui/material/colors';
import {
    Payments,
    Wallet,
    Lock,
    MoreVert,
    Add,
    ExpandMore as ExpandMoreIcon,
    Favorite as FavoriteIcon,
    Share as ShareIcon
} from '@mui/icons-material';
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Button,
    Chip,
    Divider,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Stack
} from '@mui/material';
import SeparatorRem from 'src/components/shared/SeparatorRem';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
    })
}));

const UserCard = ({
    cardPhoto,
    cardName,
    cardBirthday,
    cardDescription
}: {
    cardPhoto: string;
    cardName: string;
    cardBirthday: string;
    cardDescription: string;
}) => {
    const [expanded, setExpanded] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: deepPurple['500'] }} aria-label='recipe'>
                        {cardName[0]}
                    </Avatar>
                }
                action={
                    <div>
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
                            <MenuItem>Profile</MenuItem>

                            <MenuItem>
                                <ListItemIcon>
                                    <Lock fontSize='small' color='error' />
                                </ListItemIcon>
                                <ListItemText>Lock user</ListItemText>
                            </MenuItem>
                        </Menu>
                    </div>
                }
                title={cardName}
                subheader={cardBirthday}
            />
            <CardMedia component='img' height='194' image={cardPhoto} alt='Paella dish' />
            <CardContent>
                <Typography variant='body2' color='text.secondary'>
                    {cardDescription}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='add to favorites'>
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label='share'>
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    name='name'
                    title='More info'
                    prefix='prefix'
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label='show more'
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls='panel1-content'
                            id='panel1-header'
                        >
                            <Stack direction='row' width='100%'>
                                <Typography variant='body2' display='flex' flexDirection='row' color='text.secondary'>
                                    <Wallet fontSize='small' color='primary' />
                                    &nbsp;Bitcoin&nbsp;wallet
                                </Typography>
                            </Stack>

                            <Stack direction='row' width='100%' justifyContent='end'>
                                <Chip size='small' label='on' color='success' />
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Divider textAlign='left'>
                                <Typography variant='body2' fontWeight='500' color='text.secondary'>
                                    Founds
                                </Typography>
                            </Divider>

                            <SeparatorRem quantity={0.5} />

                            <Typography
                                variant='body1'
                                fontSize='14px'
                                width='100%'
                                textAlign='end'
                                color='text.secondary'
                            >
                                12.3 BTC
                            </Typography>

                            <Divider textAlign='left'>
                                <Typography variant='body2' fontWeight='500' color='text.secondary'>
                                    Last transaction
                                </Typography>
                            </Divider>

                            <SeparatorRem quantity={0.5} />

                            <Typography
                                variant='body1'
                                display='flex'
                                justifyContent='flex-end'
                                fontSize='14px'
                                width='100%'
                                color='text.secondary'
                            >
                                <span style={{ fontWeight: '500' }}>Hash:&nbsp;</span> ...0ad20fd1eef7bd04
                            </Typography>

                            <Typography
                                variant='body1'
                                display='flex'
                                justifyContent='flex-end'
                                fontSize='14px'
                                width='100%'
                                color='text.secondary'
                            >
                                <span style={{ fontWeight: '500' }}>Amount:&nbsp;</span> <Add color='success' /> 1.7 BTC
                            </Typography>

                            <Typography
                                variant='body1'
                                display='flex'
                                justifyContent='flex-end'
                                fontSize='14px'
                                width='100%'
                                color='text.secondary'
                            >
                                <span style={{ fontWeight: '500' }}>Date:&nbsp;</span> 18/01/2024
                            </Typography>
                        </AccordionDetails>

                        <AccordionActions>
                            <Button>
                                <Payments fontSize='small' color='success' />
                                &nbsp;Add founds
                            </Button>
                        </AccordionActions>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls='panel2-content'
                            id='panel2-header'
                        >
                            <Stack direction='row' width='100%'>
                                <Typography variant='body2' display='flex' color='text.secondary'>
                                    <Wallet fontSize='small' color='primary' />
                                    &nbsp;Ethereum&nbsp;wallet
                                </Typography>
                            </Stack>

                            <Stack direction='row' width='100%' justifyContent='end'>
                                <Chip size='small' label='off' color='error' />
                            </Stack>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Divider textAlign='left'>
                                <Typography variant='body2' fontWeight='500' color='text.secondary'>
                                    Founds
                                </Typography>
                            </Divider>

                            <SeparatorRem quantity={0.5} />

                            <Typography
                                variant='body1'
                                fontSize='14px'
                                width='100%'
                                textAlign='end'
                                color='text.secondary'
                            >
                                12.3 BTC
                            </Typography>

                            <Divider textAlign='left'>
                                <Typography variant='body2' fontWeight='500' color='text.secondary'>
                                    Last transaction
                                </Typography>
                            </Divider>

                            <SeparatorRem quantity={0.5} />

                            <Typography
                                variant='body1'
                                fontSize='14px'
                                width='100%'
                                textAlign='end'
                                color='text.secondary'
                            >
                                <span style={{ fontWeight: '500' }}>Hash:&nbsp;</span> ...0ad20fd1eef7bd04
                            </Typography>

                            <Typography
                                variant='body1'
                                fontSize='14px'
                                width='100%'
                                textAlign='end'
                                color='text.secondary'
                            >
                                <span style={{ fontWeight: '500' }}>Amount:&nbsp;</span> <Add color='success' /> 3.4 Eth
                            </Typography>

                            <Typography
                                variant='body1'
                                fontSize='14px'
                                width='100%'
                                textAlign='end'
                                color='text.secondary'
                            >
                                <span style={{ fontWeight: '500' }}>Date:&nbsp;</span> 18/01/2024
                            </Typography>
                        </AccordionDetails>

                        <AccordionActions>
                            <Button>
                                <Payments fontSize='small' color='success' />
                                &nbsp;Add founds
                            </Button>
                        </AccordionActions>
                    </Accordion>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default UserCard;
