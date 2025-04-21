import styles from './input.module.css';

export default function Input({ id, type = "text", value, onChange, placeholder, label, min, max, required = true, className='', register, error }) {
  return (
    <div className={`form-floating mb-3 ${styles.inputContainer} ${className}`}>
      <input
        id={id}
        type={type}
        className={`form-control ${styles.input} ${error ? styles.errorInput : ''}`} 
        {...(register && register(id, { required, min, max }))}

        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
      />
      <label htmlFor={id} >{label}</label>
      {error && <p className={styles.errorMessage}>{error.message}</p>}
    </div>
  );
}
