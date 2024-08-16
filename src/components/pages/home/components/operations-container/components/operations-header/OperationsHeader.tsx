import { Typography } from '@mui/material';
import { APP_COLORS } from 'src/assets/enums';
import { LANGUAGE } from 'src/assets/language';

const OperationsHeader = () => {
    return (
        <>
            <Typography
                variant='body2'
                align='center'
                width={'100%'}
                color={APP_COLORS.secondary}
                padding={'0.5rem 0 0.5rem 0'}
            >
                {LANGUAGE.ENG.home.operations.header.description}
            </Typography>
        </>
    );
};

export default OperationsHeader;
