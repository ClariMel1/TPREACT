import { useState, useEffect } from 'react';
import styles from './dropdown.module.css';
import { ChevronDown } from 'lucide-react';

export default function Dropdown({
  id,
  label,
  value,
  options,
  defaultOption,
  onChange,
  isOpen,
  setOpenDropdown,
  className = ''
}) {
  const [internalOpen, setInternalOpen] = useState(false);

  const visible = typeof isOpen === 'boolean' ? isOpen : internalOpen;

  useEffect(() => {
    if (typeof isOpen !== 'boolean') setInternalOpen(false);
  }, [value]);

  const handleSelect = (val) => {
    onChange(val);
    if (setOpenDropdown) {
      setOpenDropdown(null);
    } else {
      setInternalOpen(false);
    }
  };

  const toggleDropdown = () => {
    if (setOpenDropdown) {
      setOpenDropdown(visible ? null : id);
    } else {
      setInternalOpen((prev) => !prev);
    }
  };

  const isObjOptions = typeof options[0] === 'object';

  return (
    <div className={`${styles.dropdown} ${className}`}>
      <button className={styles.dropdownButton} onClick={toggleDropdown} type="button">
        {value
          ? isObjOptions
            ? options.find((o) => o.value === value)?.label
            : value
          : defaultOption}
        <span className={`${styles.arrow} ${visible ? styles.open : ''}`}>
          <ChevronDown />
        </span>
      </button>

      <ul className={`${styles.dropdownMenu} ${!visible ? styles.closed : ''}`}>
        <li onClick={() => handleSelect('')}>{defaultOption}</li>
        {options.map((option, idx) => (
          <li key={idx} onClick={() => handleSelect(isObjOptions ? option.value : option)}>
            {isObjOptions ? option.label : option}
          </li>
        ))}
      </ul>
    </div>
  );
}

