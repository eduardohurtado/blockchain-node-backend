import { createHashRouter } from 'react-router-dom';
import { redirectHome } from './redirects';
import Home from '../components/pages/home/Home';
import About from '../components/pages/about/About';
import APP_ROUTES from './routes';

const router = createHashRouter([
    {
        path: APP_ROUTES.root,
        element: <></>,
        loader: () => redirectHome()
    },
    {
        path: APP_ROUTES.home,
        element: <Home />
    },
    {
        path: APP_ROUTES.about,
        element: <About />
    }
]);

export default router;
