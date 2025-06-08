import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { User } from '../Types/Index';

type FavoritesContextType = {
    favorites: User[];
    addFavorite: (user: User) => void;
    removeFavorite: (userId: number) => void;
    isFavorite: (userId: number) => boolean;
};

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
    const [favorites, setFavorites] = useState<User[]>(() => {
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (user: User) => {
        if (!favorites.some(fav => fav.id === user.id)) {
            setFavorites(prev => [...prev, user]);
        }
    };

    const removeFavorite = (userId: number) => {
        setFavorites(prev => prev.filter(user => user.id !== userId));
    };

    const isFavorite = (userId: number) => {
        return favorites.some(user => user.id === userId);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}
