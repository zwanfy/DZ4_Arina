import {useEffect, useState} from 'react';

function MainPages({user}) {
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
                Добро пожаловать {users.name} {users.lastname} мы тебя ждали
            </h2>
        </div>
    );
}

export default MainPages;