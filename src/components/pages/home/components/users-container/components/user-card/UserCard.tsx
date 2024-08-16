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
import { grey } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { ExpandMore as ExpandMoreIcon, MoreVert } from '@mui/icons-material';
import userImage from 'src/assets/img/user-avatar.png';

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

const UserCard = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: grey[500] }} aria-label='recipe'>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label='settings'>
                        <MoreVert />
                    </IconButton>
                }
                title='Shrimp and Chorizo Paella'
                subheader='September 14, 2016'
            />
            <CardMedia component='img' height='194' image={userImage} alt='Paella dish' />
            <CardContent>
                <Typography variant='body2' color='text.secondary'>
                    This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add
                    1 cup of frozen peas along with the mussels, if you like.
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
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label='show more'
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add
                        chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8
                        minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan.
                        Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often
                        until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups
                        chicken broth; bring to a boil.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default UserCard;
