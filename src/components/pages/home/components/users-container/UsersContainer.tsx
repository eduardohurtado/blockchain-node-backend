import UserCard from './components/user-card/UserCard';
import UsersHeader from './components/users-header/UsersHeader';
import person1 from 'src/assets/img/person_1.jpg';
import person2 from 'src/assets/img/person_2.jpg';
import person3 from 'src/assets/img/person_3.jpg';
import person4 from 'src/assets/img/person_4.jpg';

const UsersContainer = () => {
    return (
        <>
            <UsersHeader />

            <div className='row row-cols-1 row-cols-md-4 g-4'>
                <div className='col'>
                    <UserCard
                        cardPhoto={person1}
                        cardName='Jordan'
                        cardBirthday='January 18, 2000'
                        cardDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet sem ac quam ullamcorper, non finibus arcu pulvinar. Praesent dolor justo, tempor ut tempus vel, elementum et eros. Sed facilisis et justo ac aliquet.'
                    />
                </div>
                <div className='col'>
                    <UserCard
                        cardPhoto={person2}
                        cardName='Kelley'
                        cardBirthday='September 14, 1995'
                        cardDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet sem ac quam ullamcorper, non finibus arcu pulvinar. Praesent dolor justo, tempor ut tempus vel, elementum et eros. Sed facilisis et justo ac aliquet.'
                    />
                </div>
                <div className='col'>
                    <UserCard
                        cardPhoto={person3}
                        cardName='Richards'
                        cardBirthday='October 14, 2001'
                        cardDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet sem ac quam ullamcorper, non finibus arcu pulvinar. Praesent dolor justo, tempor ut tempus vel, elementum et eros. Sed facilisis et justo ac aliquet.'
                    />
                </div>
                <div className='col'>
                    <UserCard
                        cardPhoto={person4}
                        cardName='Mitchell'
                        cardBirthday='March 14, 1993'
                        cardDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet sem ac quam ullamcorper, non finibus arcu pulvinar. Praesent dolor justo, tempor ut tempus vel, elementum et eros. Sed facilisis et justo ac aliquet.'
                    />
                </div>
            </div>
        </>
    );
};

export default UsersContainer;
