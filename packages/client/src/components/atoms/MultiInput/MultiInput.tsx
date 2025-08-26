import type { MultiInputProps } from './MultiInput.props';
import styles from './MultiInput.module.scss';

export default function MultiInput({...props}: MultiInputProps) {
    const { type, name, label, placeholder, options } = props;

    let control;

    switch (type) {
        case 'text': {
            control = <input type="text" id={name} placeholder={placeholder} name={name} className={styles.input} autoComplete="off" aria-label={label || placeholder} />;
            break;
        }

        case 'select': {
            control = (
                <select id={name} name={name} className={styles.select} aria-label={label || placeholder}>
                    <option value="" disabled selected>{placeholder}</option>
                    {options?.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            );
            break;
        }

        case 'file': {
            control = <input type="file" id={name} name={name} className={styles.file} autoComplete="off" aria-label={label || 'Choisir un fichier'} />;
            break;
        }

        case 'checkbox': {
            control = (
                <div className={styles.checkboxWrapper}>
                    <input type="checkbox" id={name} name={name} className={styles.checkbox} autoComplete="off" aria-label={label || placeholder} />
                    {label && <label htmlFor={name} className={styles.label}>{label}</label>}
                </div>
            );
            break;
        }

        case 'password': {
            control = <input type="password" id={name} placeholder={placeholder} name={name} className={styles.password} autoComplete="new-password" aria-label={label || placeholder} />;
            break;
        }

        case 'search': {
            control = <input type="search" id={name} placeholder={placeholder} name={name} className={styles.password} autoComplete="new-password" aria-label={label || placeholder} />;
            break;
        }

        case 'email': {
            control = <input type="email" id={name} placeholder={placeholder} name={name} className={styles.email} autoComplete="new-password" aria-label={label || placeholder} />;
            break;
        }

        case 'textarea': {
            control = <textarea id={name} name={name} placeholder={placeholder} className={styles.textarea} autoComplete="off" aria-label={label || placeholder}></textarea>;
            break;
        }

        default: {
            control = <input type="text" id={name} placeholder={placeholder} name={name} className={styles.input} autoComplete="off" aria-label={label || placeholder} />;
            break;
        }
    }

    return (
        <div className={styles.wrapper}>
            {type !== 'checkbox' && label && (
                <label htmlFor={name} className={`${styles["label-"+type] || ''}`}>
                    {label}
                </label>
            )}
            {control}
        </div>
    );
}

