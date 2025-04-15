import React, { useState } from 'react';
import styles from './Search.module.css';
import { SearchCode, SearchIcon, SearchSlash } from 'lucide-react';

export default function Search({ onSearch }) {
    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(e.target[0].value);
    };

    return (
        <form className={styles.searchContainer} onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Ingresa tu búsqueda"
            />
            <button><SearchIcon /></button>
        </form>
    );
}