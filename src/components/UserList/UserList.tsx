import { useEffect, useState } from "react"
import {UserCard} from "../UserCard/UserCard.tsx"
import type { User } from "../../Types/Index.ts"
import styles from "./UserList.module.css"

export function UserList() {
    const [users, setUsers] = useState< User[] | null >(null);
    const [favorites, setFavorites] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState< string | null >(null);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

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

    const handleAddToFavorites = (user: User) => {
        if (!favorites.find(fav => fav.id === user.id)) {
            setFavorites(prev => [...prev, user]);
        }
    };

    const handleRemoveFromFavorites = (user: User) => {
        setFavorites(prev => prev.filter(fav => fav.id !== user.id));
    };

    if (isLoading) return <p>Загрузка...</p>
    if (error) return <p>Ошибка: {error}</p>
    if (!users) return <p>Нет данных</p>

    return (
<div>
    <h1>Пользователи</h1>
        <div className={styles.gridContainer}>
            {users.map((user) => (
                <UserCard key={user.id}
                          user={user}
                          onAddToFavorites={handleAddToFavorites}
                          onRemoveFromFavorites={handleRemoveFromFavorites}
                          isFavorite={favorites.some(fav => fav.id === user.id)}
                />
                ))}
        </div>

    <h1>Избранные</h1>
    <div className={styles.gridContainer}>
        {favorites.map((user) => (
            <div key={user.id}>
                <UserCard
                    key={user.id}
                    user={user}
                    onRemoveFromFavorites={handleRemoveFromFavorites}
                    isFavorite={true}
                />
            </div>
        ))}
    </div>
</div>
    )
}