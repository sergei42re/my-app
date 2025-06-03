import styles from "./H3.module.css"

type User = {
    id: number;
    name: string;
    email: string;
};

export function UserCard({ user }: { user: User }) {
    return (
        <div>
            <h3 className={styles.sexyColor}>{user.name}</h3>
            <p>{user.email}</p>
        </div>
    )
};