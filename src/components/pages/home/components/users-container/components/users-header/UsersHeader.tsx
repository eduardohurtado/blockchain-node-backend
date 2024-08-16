import { Divider, Typography } from '@mui/material';
import { LANGUAGE } from 'src/assets/language';

// Component styles
import './users-header.css';

const UsersHeader = () => {
    return (
        <>
            <Divider className='users-header-divider' textAlign='right'>
                <Typography variant='h5' fontWeight={300}>
                    {LANGUAGE.ENG.home.usercard.header.title}
                </Typography>
            </Divider>
        </>
    );
};

export default UsersHeader;
