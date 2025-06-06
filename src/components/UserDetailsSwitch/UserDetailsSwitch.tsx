import type { User } from "../../Types/Index.ts"
import {useState} from "react";
import styles from "./UserDetailsSwitch.module.css"
// написание css стилей мне помогал AI, просто станартное типо margin padding color и т.п. я помню
// а вот всякие position z-index уже подзабыл...


export function UserDetailsSwitch({ user }: { user: User }) {
    const [showDetalis, setShowDetalis] = useState(false);

    const switchDetalis = () => {
        setShowDetalis(!showDetalis);
    };
    return (

<div>
        <button onClick={switchDetalis}>
            {showDetalis ? 'Скрыть детали' : 'Показать детали'}
        </button>

    {showDetalis && (
        <div className={styles.modalWind}>
        <p>Имя пользователя:  {user.username}</p>
        <p>Город:  {user.address.city}</p>
        <p>Улица:  {user.address.street}</p>
        <p>Номер телефона:  {user.phone}</p>
        <p>Вебсайт:  {user.website}</p>
        <p>Название компании:  {user.company.name}</p>

            <button onClick={switchDetalis} className={styles.modalCloseBtn}>
                Закрыть
            </button>
        </div>
    )}

</div>
    )

}