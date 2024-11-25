

const Root = () => {
    const handleAddUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name, email};
        console.log(user);
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <h2>Welcome to CRUD</h2>
        </div>
    );
};

export default Root;