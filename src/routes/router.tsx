import { createHashRouter } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { Container } from '@mui/material';
import Home from '../components/pages/home/Home';
import About from '../components/pages/about/About';
import APP_PAGES from './app-pages';
import Navbar from 'src/components/navbar/Navbar';
import SeparatorRem from 'src/components/shared/SeparatorRem';

const router = createHashRouter([
    {
        path: '*',
        element: <></>,
        loader: () => redirect(APP_PAGES.home.route)
    },
    {
        path: APP_PAGES.home.route,
        element: (
            <>
                <Navbar />
                <Container maxWidth='xl'>
                    <SeparatorRem quantity={6} />
                    <Home />
                    <SeparatorRem quantity={2} />
                </Container>
            </>
        )
    },
    {
        path: APP_PAGES.about.route,
        element: (
            <>
                <Navbar />
                <Container maxWidth='xl'>
                    <SeparatorRem quantity={6} />
                    <About />
                    <SeparatorRem quantity={2} />
                </Container>
            </>
        )
    }
]);

export default router;
