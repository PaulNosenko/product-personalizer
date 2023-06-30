import styles from './OptionColor.module.scss'
import clsx from 'clsx';

const OptionColor = (props) => {

    const prepareColorClassName = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
    }

    return (<div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
            {props.colors.map(c => {
                return <li key={c}>
                    <button type="button" onClick={props.changeColor.bind(null, c)} className={clsx(prepareColorClassName(c), c === props.currentColor && styles.active)} />
                </li>
            })}
        </ul>
    </div>);
}

export default OptionColor;