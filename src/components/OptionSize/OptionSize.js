import styles from './OptionSize.module.scss';
import clsx from 'clsx';

const OptionSize = (props) => {
    return (<div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
            {props.sizes.map(s => {
                return <li key={s.name}>
                    <button type="button" onClick={props.changeSize.bind(null, s.name)} className={clsx(s.name === props.currentSize && styles.active)}>{s.name}</button>
                </li>
            })}
        </ul>
    </div>);
}

export default OptionSize;