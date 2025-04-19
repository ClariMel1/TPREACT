import React, { useState } from 'react';
import "./Header.css";

export default function Header({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value); 
    };

    return (
        <header className="home-header">
            <div className="logo">Series y Películas</div>
            <nav className="nav-menu">
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input"
                />
            </nav>
        </header>
    );
}