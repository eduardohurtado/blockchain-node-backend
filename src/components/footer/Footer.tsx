import { SOCIAL_MEDIA } from 'src/assets/enums';
import { Container, Typography } from '@mui/material';

// Component styles
import './footer.css';
import { LANGUAGE } from 'src/assets/language';

const Footer = () => {
    return (
        <>
            <div className='footer-body'>
                <section className='media-container'>
                    <a
                        data-mdb-ripple-init
                        className='media-link'
                        href={SOCIAL_MEDIA.linkedin}
                        role='button'
                        target='blank'
                    >
                        <i className='fab fa-linkedin-in'></i>
                    </a>

                    <a
                        data-mdb-ripple-init
                        className='media-link'
                        href={SOCIAL_MEDIA.github}
                        role='button'
                        target='blank'
                    >
                        <i className='fab fa-github'></i>
                    </a>
                </section>

                <section>
                    <Container className='text-container'>
                        <Typography variant='body2' color='text.secondary' fontSize={14}>
                            {LANGUAGE.ENG.footer.label}
                        </Typography>
                    </Container>
                </section>

                <section className='links-container'>
                    <div>
                        <Typography variant='body2' color='text.primary' fontWeight={500}>
                            <span> {LANGUAGE.ENG.footer.links.docs.name}</span>
                        </Typography>

                        <ul className='links-data'>
                            <li>
                                <Typography variant='body2' color='text.secondary'>
                                    <a href='https://react.dev/learn' target='blank'>
                                        {LANGUAGE.ENG.footer.links.docs.react}
                                    </a>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body2' color='text.secondary'>
                                    <a href='https://nodejs.org/docs/latest/api/' target='blank'>
                                        {LANGUAGE.ENG.footer.links.docs.node}
                                    </a>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body2' color='text.secondary'>
                                    <a href='https://mui.com/material-ui/getting-started/' target='blank'>
                                        {LANGUAGE.ENG.footer.links.docs.muiCore}
                                    </a>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body2' color='text.secondary'>
                                    <a href='https://www.npmjs.com/package/gulp' target='blank'>
                                        {LANGUAGE.ENG.footer.links.docs.gulp}
                                    </a>
                                </Typography>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <Typography variant='body2' color='text.primary' fontWeight={500}>
                            <span>{LANGUAGE.ENG.footer.links.interest.name}</span>
                        </Typography>

                        <ul className='links-data'>
                            <li>
                                <Typography variant='body2' color='text.secondary'>
                                    <a href='https://github.com/eduardohurtado' target='blank'>
                                        {LANGUAGE.ENG.footer.links.interest.github}
                                    </a>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body2' color='text.secondary'>
                                    <a href='https://www.linkedin.com/in/eduardo-hurtado-g/' target='blank'>
                                        {LANGUAGE.ENG.footer.links.interest.linkedin}
                                    </a>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body2' color='text.secondary'>
                                    <a href='https://compassionate-yalow-9ebf21.netlify.app/#/' target='blank'>
                                        {LANGUAGE.ENG.footer.links.interest.netflex}
                                    </a>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body2' color='text.secondary'>
                                    <a href='https://create-react-app.dev/docs/getting-started' target='blank'>
                                        {LANGUAGE.ENG.footer.links.interest.cra}
                                    </a>
                                </Typography>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className='copyright-container'>
                    <div>
                        <Typography variant='body2' color='text.secondary'>
                            © 2024 Copyright:&nbsp;
                            <a className='text-reset fw-bold' href='https://github.com/eduardohurtado/' target='blank'>
                                Github
                            </a>
                        </Typography>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Footer;
