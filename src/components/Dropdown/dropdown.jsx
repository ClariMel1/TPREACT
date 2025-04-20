import { useState, useEffect } from 'react';
import styles from './dropdown.module.css';
import { ChevronDown } from 'lucide-react';

export default function Dropdown({ label, value, options, defaultOption, onChange, className=''}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [value]);

  const handleSelect = (val) => {
    onChange(val); 
    setOpen(false); 
  };

  const isObjOptions = typeof options[0] === 'object';

  return (
    <div className={`${styles.dropdown} ${className}`}>
      <button className={styles.dropdownButton} onClick={() => setOpen(!open)} type="button">
        {value
          ? (isObjOptions
              ? options.find((o) => o.value === value)?.label
              : value)
          : defaultOption}
        <span className={`${styles.arrow} ${open ? styles.open : ''}`}> <ChevronDown /></span>
      </button>

      {open && (
        <ul className={styles.dropdownMenu}>
          <li onClick={() => handleSelect('')}>{defaultOption}</li>
          {options.map((option, idx) => (
            <li key={idx} onClick={() => handleSelect(isObjOptions ? option.value : option)}>
              {isObjOptions ? option.label : option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
