
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const usersData = useLoaderData();
    console.log(usersData);
    const handleAddUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name, email};
        console.log(user)
            fetch('http://localhost:4000/users',{
                method:'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body : JSON.stringify(user)
            }
            )
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    }
    return (
        <div>
            <h2>Welcome to users section</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder="Enter your name"/>
                <br />
                <br />
                <input type="email" name="email" placeholder="Enter your email" />
                <br />
                <br />
                <input type="submit" value="Add user" />
                
            </form>
        </div>
    );
};

export default Users;