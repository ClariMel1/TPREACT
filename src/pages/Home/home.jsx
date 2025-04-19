import React, { useState, useEffect } from 'react';
import './StylesHome.css';
import Header from '../../components/Header/Header.jsx';
import Filter from '../../components/Filter/Filter.jsx';
import ItemList from '../../components/ItemList/ItemList.jsx';
import Form from '../../components/Form/Form.jsx';
import { PlusCircle } from 'lucide-react';

export default function Home() {
    const [showForm, setShowForm] = useState(false);
    const [items, setItems] = useState([]);
    const [editingItem, setEditingItem] = useState(null);

    useEffect(() => {
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    useEffect(() => {
        if (items.length > 0) {
            localStorage.setItem('items', JSON.stringify(items));
        }
    }, [items]);

    const handleAddClick = () => {
        setEditingItem(null); 
        setShowForm(true);
    };

    const handleFormSubmit = (newItem) => {
        if (editingItem) {
            
            setItems(items.map((item) => (item.id === editingItem.id ? newItem : item)));
        } else {
            
            setItems([...items, { ...newItem, id: Date.now() }]);
        }
        setShowForm(false); 
        setEditingItem(null); 
    };

    const handleEditClick = (item) => {
        setEditingItem(item); 
        setShowForm(true); 
    };

    const handleDeleteClick = (id) => {
        setItems(items.filter((item) => item.id !== id)); 
    };

    return (
        <div>
            <Header />
            <div className="home-container">
                <h1>Bienvenido a Series y Películas</h1>
                <div className="home-buttons">
                    <button className="add-button" onClick={handleAddClick}>
                        <PlusCircle size={16} /> Agregar
                    </button>
                </div>
                <Filter />
                {showForm && (
                    <Form
                        onSubmit={handleFormSubmit}
                        onCancel={() => setShowForm(false)}
                        initialData={editingItem || {}}
                    />
                )}
                <ItemList
                    items={items}
                    onEdit={handleEditClick}
                    onDelete={handleDeleteClick}
                />
            </div>
        </div>
    );
}