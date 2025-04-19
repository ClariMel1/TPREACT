import { useState } from 'react';
import styles from './dropdown.module.css';
import { ChevronDown, ChevronUp} from 'lucide-react';

export default function Dropdown({ label, value, options, defaultOption, onChange }) {
  const [open, setOpen] = useState(false);

  const isObjOptions = typeof options[0] === 'object';

  const handleSelect = (val) => {
    onChange(val);
    setOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownButton} onClick={() => setOpen(!open)}>
        {value ? (isObjOptions ? options.find(o => o.value === value)?.label : value) : defaultOption}
        <span className={`${styles.arrow} ${open ? styles.open : ''}`}><ChevronDown /></span>
      </button>
      {open && (
        <ul className={styles.dropdownMenu}>
          <li onClick={() => handleSelect('')}>{defaultOption}</li>
          {options.map((option, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(isObjOptions ? option.value : option)}
            >
              {isObjOptions ? option.label : option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
