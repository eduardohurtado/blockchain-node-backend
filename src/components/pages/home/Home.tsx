import { useEffect } from 'react';
import UsersContainer from './components/users-container/UsersContainer';
import OperationsContainer from './components/operations-container/OperationsContainer';
import ToolsBar from './components/tools-bar/ToolsBar';

// Styles
import './home.css';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='home-body'>
            <ToolsBar />

            <UsersContainer />

            <OperationsContainer />
        </div>
    );
};

export default Home;
