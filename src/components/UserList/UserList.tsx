import { useEffect, useState } from "react";
import {UserCard} from "../UserCard/UserCard.tsx";

type User = {
    id: number;
    name: string;
    email: string;
};

export function UserList() {
    const [users, setUsers] = useState< User[] | null >(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState< string | null >(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            if (!res.ok) throw new Error("Ошибка загрузки пользователей");
            return res.json();    
        })
        .then((data: User[]) => {
            setUsers(data);
            setIsLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setIsLoading(false);
        })
    },[]);
    if (isLoading) return <p>Загрузка...</p>
    if (error) return <p>Ошибка: {error}</p>
    if (!users) return <p>Нет данных</p>

    return (
        <div>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
                ))}
        </div>
    )
};