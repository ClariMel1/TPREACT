import React from 'react';
import { Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import './ItemList.css';

export default function ItemList({ items, onEdit, onDelete }) {
    return (
        <div className="items-list">
            {items.length === 0 ? (
                <p>No hay películas o series que coincidan con el filtro o la búsqueda.</p>
            ) : (
                items.map((item) => (
                    <div key={item.id} className="item">
                        <h3>{item.title}</h3>
                        <p><strong>Tipo:</strong> {item.type}</p>
                        <p><strong>Director:</strong> {item.director}</p>
                        <p><strong>Año:</strong> {item.anio}</p>
                        <p><strong>Género:</strong> {item.genre}</p>
                        <p><strong>Calificación:</strong> {item.rating}</p>
                        <p>
                            <strong>Estado:</strong>{' '}
                            {item.watched ? (
                                <span className="watched-icon">
                                    <Eye size={16} color="green" /> Visto
                                </span>
                            ) : (
                                <span className="not-watched-icon">
                                    <EyeOff size={16} color="red" /> No visto
                                </span>
                            )}
                        </p>
                        <div className="item-actions">
                            <button className="edit-button" onClick={() => onEdit(item)}>
                                <Edit size={16} /> Editar
                            </button>
                            <button className="delete-button" onClick={() => onDelete(item.id)}>
                                <Trash2 size={16} /> Eliminar
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}