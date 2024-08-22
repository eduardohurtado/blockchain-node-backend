import { SOCIAL_MEDIA } from 'src/assets/enums';
import { Container, Typography } from '@mui/material';

// Component styles
import './footer.css';

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
                        Est labore nisi est ad consequat in veniam laborum. Do nisi proident ullamco pariatur fugiat
                        tempor elit ex esse ex do incididunt consectetur enim. Esse exercitation magna sunt do velit
                        dolor dolor nulla nisi velit. Dolore mollit exercitation consectetur in. Tempor do ea nostrud
                        reprehenderit commodo non deserunt reprehenderit.
                    </Container>
                </section>

                <section className='links-container'>
                    <div>
                        <Typography variant='body2' color='text.primary' fontWeight={600}>
                            <span>Documentation</span>
                        </Typography>

                        <ul className='links-data'>
                            <li>
                                <Typography variant='body2' color='text.secondary'>
                                    <a href='https://react.dev/learn' target='blank'>
                                        React
                                    </a>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body2' color='text.secondary'>
                                    <a href='https://nodejs.org/docs/latest/api/' target='blank'>
                                        NodeJS
                                    </a>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body2' color='text.secondary'>
                                    <a href='https://mui.com/material-ui/getting-started/' target='blank'>
                                        MUI Core
                                    </a>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body2' color='text.secondary'>
                                    <a href='https://www.npmjs.com/package/gulp' target='blank'>
                                        Gulp
                                    </a>
                                </Typography>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <Typography variant='body2' color='text.primary' fontWeight={600}>
                            <span>Interest links</span>
                        </Typography>

                        <ul className='links-data'>
                            <li>
                                <Typography variant='body2' color='text.secondary'>
                                    <a href='https://github.com/eduardohurtado' target='blank'>
                                        GitHub
                                    </a>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body2' color='text.secondary'>
                                    <a href='https://www.linkedin.com/in/eduardo-hurtado-g/' target='blank'>
                                        LinkedIn
                                    </a>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body2' color='text.secondary'>
                                    <a href='https://compassionate-yalow-9ebf21.netlify.app/#/' target='blank'>
                                        NetFlex React
                                    </a>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body2' color='text.secondary'>
                                    <a href='https://create-react-app.dev/docs/getting-started' target='blank'>
                                        CRA
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
