import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import TableHistory from './components/table-history/TableHistory';
import SeparatorRem from 'src/components/shared/SeparatorRem';
import { LANGUAGE } from 'src/assets/language';

const BlockchainHistory = () => {
    return (
        <>
            <SeparatorRem quantity={1} />

            <Divider>
                <Chip label={LANGUAGE.ENG.home.operations.blockchainHistory.title} size='small' />
            </Divider>

            <SeparatorRem quantity={2} />

            <TableHistory />
        </>
    );
};

export default BlockchainHistory;
