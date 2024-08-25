import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import TableHistory from './components/table-history/TableHistory';
import SeparatorRem from 'src/components/shared/SeparatorRem';
import { LANGUAGE } from 'src/assets/language';
import { Typography } from '@mui/material';

// Component styles
import './blockchain-history.css';

const BlockchainHistory = () => {
    const historyAvailable = false;

    return (
        <>
            <SeparatorRem quantity={1} />

            <Divider>
                <Chip label={LANGUAGE.ENG.home.operations.blockchainHistory.title} size='small' />
            </Divider>

            <SeparatorRem quantity={2} />

            <div className='blockchain-history-main-container'>
                {historyAvailable ? (
                    <TableHistory />
                ) : (
                    <div className='no-history-container'>
                        <Typography variant='body2' color='text.secondary' fontSize={14}>
                            {LANGUAGE.ENG.home.operations.blockchainHistory.noHistory}
                        </Typography>
                    </div>
                )}
            </div>
        </>
    );
};

export default BlockchainHistory;
