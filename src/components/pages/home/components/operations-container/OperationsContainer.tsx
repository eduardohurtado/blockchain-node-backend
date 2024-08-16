import { Divider, Typography } from '@mui/material';
import BlockchainHistory from '../blockchain-history/BlockchainHistory';
import OperationsHeader from './components/operations-header/OperationsHeader';
import SliderWalletSelect from './components/slider-wallet-select/SliderWalletSelect';
import { LANGUAGE } from 'src/assets/language';

// Component styles
import './operations-container.css';

const OperationsContainer = () => {
    return (
        <>
            <Divider className='operations-container-divider'>
                <Typography variant='h5' fontWeight={300}>{LANGUAGE.ENG.home.operations.header.title}</Typography>
            </Divider>

            <OperationsHeader />

            <SliderWalletSelect />

            <BlockchainHistory />
        </>
    );
};

export default OperationsContainer;
