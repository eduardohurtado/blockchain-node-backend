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
import { LANGUAGE } from 'src/assets/language';
import WalletAccordion from './components/WalletAccordion/WalletAccordion';
import UserActionMenu from './components/UserActionMenu/UserActionMenu';
import { ExpandMore as ExpandMoreIcon, Favorite as FavoriteIcon, Share as ShareIcon } from '@mui/icons-material';

// Component styles
import './user-card.css';

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

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className='card-container'>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: deepPurple['500'] }} aria-label='recipe'>
                        {cardName[0]}
                    </Avatar>
                }
                action={<UserActionMenu />}
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
                    <WalletAccordion walletName={LANGUAGE.ENG.home.usercard.wallet.btc.name} />
                    <WalletAccordion walletName={LANGUAGE.ENG.home.usercard.wallet.ethereum.name} />
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default UserCard;
