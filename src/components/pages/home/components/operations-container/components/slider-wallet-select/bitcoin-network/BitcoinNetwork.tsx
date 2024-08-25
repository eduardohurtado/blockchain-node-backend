import { Button } from '@mui/material';
import { LANGUAGE } from 'src/assets/language';

// Component styles
import './bitcoin-network.css';

const BitcoinNetwork = () => {
    return (
        <div className='bitcoin-network-main-container'>
            <Button variant='contained'>{LANGUAGE.ENG.home.operations.networkOperations.bitcoin.create}</Button>
        </div>
    );
};

export default BitcoinNetwork;
