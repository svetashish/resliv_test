import {useEffect, useState} from 'react'

import EmployeesApi from '../servises/EmployeesApi';
import HandleButton from './HandleButton/HandleButton';
import styles from './Employees.module.css';
import useStyles from "./style";

const Employees = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState('');
    const classes = useStyles();

    const loadData = async () => {
        const api = new EmployeesApi();
        const response = await api.getUsers();
        if (response) {
            const {data} = response
            setUsers(data);
        }
    }

    useEffect(() => {
        loadData()
    }, [])

    const handleOnChange = (event) => {
        setNewUser(event.target.value)
    }

    const addNewUser = () => {
        if (newUser) {
            setUsers([...[{id: users.length + 1, first_name: newUser}], ...users])
            setNewUser('')
        } else {
            alert('Введите нового пользователя!')
        }
    }

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }

    return (
        <div>
            <div className={styles.add_users}>
                <input onChange={handleOnChange} value={newUser} />
                <HandleButton
                    text="Добавить"
                    className = {classes.buttonAdd}
                    onClick={addNewUser}/>
            </div>
            <ul>
                {users.map((user, index) =>
                    <li key={index} className={styles.users_list}>
                        <p>{user.first_name}</p>
                        <HandleButton  
                            text="Удалить"
                            onClick={() => deleteUser(user.id)} />
                    </li>)}
            </ul>
        </div>
    )
}

export default Employees;