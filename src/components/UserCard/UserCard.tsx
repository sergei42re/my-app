import styles from "./UserCard.module.css"
import type { User } from "../../Types/Index.ts"
import {UserDetailsSwitch} from "../UserDetailsSwitch/UserDetailsSwitch.tsx"


export function UserCard({ user }: { user: User }) {


    return (

        <div className={styles.cardContainer}>

            <h3>Имя:   {user.name}</h3>
            <p>Емайл:   {user.email}</p>
            <UserDetailsSwitch user={user}/>

        </div>
    )
}