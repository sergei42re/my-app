import type { User } from "../../Types/Index.ts"
import {useState} from "react";

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
        <div>
        <p>Имя пользователя:  {user.username}</p>
        <p>Город:  {user.address.city}</p>
        <p>Улица:  {user.address.street}</p>
        <p>Номер телефона:  {user.phone}</p>
        <p>Вебсайт:  {user.website}</p>
        <p>Название компании:  {user.company.name}</p>
        </div>
    )}

</div>
    )

}