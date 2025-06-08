import styles from "./UserCard.module.css";
import type { User } from "../../Types/Index.ts";
import {useToggleDetails} from "../../Hooks/useToggleDetails.ts";
import { FavoriteButton} from "../FavoriteButton/FavoriteButton.tsx";

export function UserCard({ user }: { user: User }) {
    const {showDetails, toggleDetails} = useToggleDetails();

    return (

        <div className={styles.cardContainer}>

            <h3>Имя:   {user.name}</h3>
            <p>Емайл:   {user.email}</p>
            <FavoriteButton user={user} />


            <button onClick={toggleDetails}>
                {showDetails ? 'Скрыть детали' : 'Показать детали'}
            </button>
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