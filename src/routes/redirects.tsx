import { redirect } from 'react-router-dom';
import APP_ROUTES from './routes';

export const redirectHome = () => {
    return redirect(APP_ROUTES.home);
};
