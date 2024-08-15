import userImage from 'src/assets/img/user-avatar.png';

// Styles
import './userCard.css';

const UserCard = () => {
    return (
        <div className='card h-100 card-container'>
            <img src={userImage} className='card-img-top' alt='user-image' />
            <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                </p>
            </div>
            <div className='card-footer'>
                <small className='text-muted'>Last updated 3 mins ago</small>
            </div>
        </div>
    );
};

export default UserCard;
