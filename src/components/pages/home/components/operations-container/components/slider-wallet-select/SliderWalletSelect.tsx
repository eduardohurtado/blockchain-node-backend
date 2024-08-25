import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BitcoinNetwork from './bitcoin-network/BitcoinNetwork';
import EthereumNetwork from './ethereum-network/EthereumNetwork';
import { CurrencyBitcoin, Cloud } from '@mui/icons-material';

// Component styles
import './slider-wallet-select.css';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
};

const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
};

const SliderWalletSelect = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} centered={true} onChange={handleChange} aria-label='basic tabs example'>
                    <Tab icon={<CurrencyBitcoin />} label='Bitcoin Network' {...a11yProps(0)} />
                    <Tab icon={<Cloud />} label='Ethereum Network' {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <div className='networks-container'>
                    <BitcoinNetwork />
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <div className='networks-container'>
                    <EthereumNetwork />
                </div>
            </CustomTabPanel>
        </Box>
    );
};

export default SliderWalletSelect;
