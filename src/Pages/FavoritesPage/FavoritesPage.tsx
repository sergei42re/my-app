import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext.tsx";
import type { User} from "../../Types/Index.ts";


export default function FavoritesPage() {
    const context = useContext(FavoritesContext)!;

    const { favorites, removeFavorite } = context;


    return (
        <div>
            <h1>Избранное</h1>
            {favorites.map((user: User) => (
                <div key={user.id}>
                    <span>{user.name}</span>
                    <button onClick={() => removeFavorite(user.id)}>Удалить</button>
                </div>
            ))}
        </div>
    );
}
