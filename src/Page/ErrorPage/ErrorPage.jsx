import {useEffect, useState} from 'react';

function ErrorPage ({user}) {
    const [users, setUsers] = useState({
        name: '',
        lastname: ''
    });
    useEffect(() => {
        setUsers(user);
    }, [user]);
    return (
        <div>
            <h2>
                Тебе сюда нельзя {users.name} {users.lastname}
            </h2>
        </div>
    );
}

export default ErrorPage;