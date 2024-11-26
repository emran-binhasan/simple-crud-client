import { Link } from "react-router-dom";
const Root = () => {
    return (
        <div>
            <h2>Welcome to CRUD</h2>
            <Link to={'/users'}></Link>
        </div>
    );
};

export default Root;