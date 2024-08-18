import { LANGUAGE } from 'src/assets/language';
import SeparatorRem from 'src/components/shared/SeparatorRem';
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Button,
    Chip,
    Divider,
    Stack,
    Typography
} from '@mui/material';
import { Payments, Wallet, Add, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

const WalletAccordion = ({ walletName }: { walletName: string }) => {
    return (
        <>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header'>
                    <Stack direction='row' width='100%'>
                        <Typography variant='body2' color='text.secondary'>
                            <Wallet fontSize='small' color='primary' />
                            &nbsp;{walletName}
                        </Typography>
                    </Stack>

                    <Stack direction='row' width='min-content' justifyContent='end'>
                        <Chip size='small' label='on' color='success' />
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    <Divider textAlign='left'>
                        <Typography variant='body2' fontWeight='500' color='text.secondary'>
                            {LANGUAGE.ENG.home.usercard.wallet.info.founds}
                        </Typography>
                    </Divider>

                    <SeparatorRem quantity={0.5} />

                    <Typography variant='body1' fontSize='14px' width='100%' textAlign='end' color='text.secondary'>
                        12.3 BTC
                    </Typography>

                    <Divider textAlign='left'>
                        <Typography variant='body2' fontWeight='500' color='text.secondary'>
                            {LANGUAGE.ENG.home.usercard.wallet.info.lastTransaction.name}
                        </Typography>
                    </Divider>

                    <SeparatorRem quantity={0.5} />

                    <Typography
                        variant='body1'
                        display='flex'
                        justifyContent='flex-end'
                        fontSize='14px'
                        width='100%'
                        color='text.secondary'
                    >
                        <span style={{ fontWeight: '500' }}>
                            {LANGUAGE.ENG.home.usercard.wallet.info.lastTransaction.hash}:&nbsp;
                        </span>{' '}
                        ...0ad20fd1eef7bd04
                    </Typography>

                    <Typography
                        variant='body1'
                        display='flex'
                        justifyContent='flex-end'
                        fontSize='14px'
                        width='100%'
                        color='text.secondary'
                    >
                        <span style={{ fontWeight: '500' }}>
                            {LANGUAGE.ENG.home.usercard.wallet.info.lastTransaction.amount}:&nbsp;
                        </span>{' '}
                        <Add color='success' /> 1.7 BTC
                    </Typography>

                    <Typography
                        variant='body1'
                        display='flex'
                        justifyContent='flex-end'
                        fontSize='14px'
                        width='100%'
                        color='text.secondary'
                    >
                        <span style={{ fontWeight: '500' }}>
                            {LANGUAGE.ENG.home.usercard.wallet.info.lastTransaction.date}:&nbsp;
                        </span>{' '}
                        18/01/2024
                    </Typography>
                </AccordionDetails>

                <AccordionActions>
                    <Button>
                        <Payments fontSize='small' color='success' />
                        &nbsp;{LANGUAGE.ENG.home.usercard.wallet.actions.addFounds}
                    </Button>
                </AccordionActions>
            </Accordion>
        </>
    );
};

export default WalletAccordion;
