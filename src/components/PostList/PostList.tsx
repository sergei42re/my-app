import { useEffect, useState } from "react";


type Post = {
    id: number;
    title: string;
    body: string;
};

export function PostList() {
    const [posts, setPosts] = useState<Post[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                if (!res.ok) throw new Error("Ошибка загрузки постов");
                return res.json();
            })
            .then((data: Post[]) => {
                setPosts(data);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;
    if (!posts) return <p>Нет данных</p>;

    return (
        <ul>
            {posts.slice(0, 5).map(post => (
                <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    );
}