import UserCard from './components/user-card/UserCard';
import UsersHeader from './components/users-header/UsersHeader';

const UsersContainer = () => {
    return (
        <>
            <UsersHeader />

            <div className='row row-cols-1 row-cols-md-4 g-4'>
                <div className='col'>
                    <UserCard />
                </div>
                <div className='col'>
                    <UserCard />
                </div>
                <div className='col'>
                    <UserCard />
                </div>
                <div className='col'>
                    <UserCard />
                </div>
            </div>
        </>
    );
};

export default UsersContainer;
