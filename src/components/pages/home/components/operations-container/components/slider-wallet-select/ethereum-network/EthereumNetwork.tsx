import { Button } from '@mui/material';
import { LANGUAGE } from 'src/assets/language';

// Component styles
import './ethereum-network.css';

const EthereumNetwork = () => {
    return (
        <div className='ethereum-network-main-container'>
            <Button variant='contained'>{LANGUAGE.ENG.home.operations.networkOperations.ethereum.create}</Button>
        </div>
    );
};

export default EthereumNetwork;
