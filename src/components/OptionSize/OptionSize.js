import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

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

OptionSize.propTypes = {
    sizes: PropTypes.array,
    currentSize: PropTypes.string,
    changeSize: PropTypes.func
}

export default OptionSize;