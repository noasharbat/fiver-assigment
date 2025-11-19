
import './UserInput.css';

const UserInput = ({ user, setUser }) => {
    return (
        <div className="user-input-container">
            <input
                className="user-input"
                placeholder="Enter username..."
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
        </div>
    );
};

export default UserInput;
