import styles from "./UserCard.module.css";
import type { User } from "../../Types/Index.ts";
import {useToggleDetails} from "../../Hooks/useToggleDetails.ts";

type Props = {
    user: User;
    onAddToFavorites?: (user: User) => void;
    onRemoveFromFavorites?: (user: User) => void;
    isFavorite?: boolean;
    showFavoriteStatus?: boolean;
};

export function UserCard({ user, onAddToFavorites,onRemoveFromFavorites,showFavoriteStatus = true, isFavorite }: Props) {
    const {showDetails, toggleDetails} = useToggleDetails();

    return (

        <div className={styles.cardContainer}>

            <h3>Имя:   {user.name}</h3>
            <p>Емайл:   {user.email}</p>


            <button onClick={toggleDetails}>
                {showDetails ? 'Скрыть детали' : 'Показать детали'}
            </button>

            {onAddToFavorites && !isFavorite && (
                <button onClick={() => onAddToFavorites(user)}>
                    Добавить в избранное
                </button>
            )}

            {onRemoveFromFavorites && isFavorite && (
                <button onClick={() => onRemoveFromFavorites(user)}>
                    Удалить из избранных
                </button>
            )}

            {isFavorite && showFavoriteStatus && <p>Уже в избранном</p>}

            {showDetails && (
                <div className={styles.modalWind}>
                    <p>Имя пользователя:  {user.username}</p>
                    <p>Город:  {user.address.city}</p>
                    <p>Улица:  {user.address.street}</p>
                    <p>Номер телефона:  {user.phone}</p>
                    <p>Вебсайт:  {user.website}</p>
                    <p>Название компании:  {user.company.name}</p>

                    <button onClick={toggleDetails} className={styles.modalCloseBtn}>
                        Закрыть
                    </button>
                </div>
            )}

        </div>
    )
}