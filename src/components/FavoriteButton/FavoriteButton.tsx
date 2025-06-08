import type { User } from "../../Types/Index";
import { FavoritesContext } from "../../context/FavoritesContext.tsx";
import {useContext} from "react";

export function FavoriteButton({ user }: { user: User }) {
    const context = useContext(FavoritesContext)!;
    const { isFavorite, addFavorite, removeFavorite } = context;

    const handleClick = () => {
        if (isFavorite(user.id)) {
            removeFavorite(user.id);
        } else {
            addFavorite(user);
        }
    };

    return (
        <button
            onClick={handleClick}
            aria-label={isFavorite(user.id) ? 'Удалить из избранного' : 'Добавить в избранное'}
        >
            {isFavorite(user.id) ? '★' : '☆'}
        </button>
    );
}
