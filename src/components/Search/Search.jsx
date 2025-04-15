import styles from './Search.module.css';
import { Search as SearchIcon } from 'lucide-react';


export default function Search({ searchTerm, onSearchChange }) {
  return (
    <div className={styles.searchContainer}  >
      <input
        type="text"
        placeholder="Buscar por título o director"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles.searchInput}
      /> <SearchIcon size={32} color="black" />
    </div>
  );
}
