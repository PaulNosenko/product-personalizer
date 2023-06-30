import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types'
import { useState } from 'react';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const changeSize = (selectedSize) => {
    setCurrentSize(selectedSize);
  }

  const changeColor = (selectedColor) => {
    setCurrentColor(selectedColor);
  }

  const getPrice = () => {
    return props.basePrice + props.sizes.find(s => s.name === currentSize).additionalPrice;
  }

  const addToCart = (e) => {
    e.preventDefault();
    console.group('Summary')
    console.log('Name: ', props.title)
    console.log('Price: ', getPrice())
    console.log('Size: ', currentSize)
    console.log('Color: ', currentColor)
    console.groupEnd();
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt="Kodilla shirt"
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit={addToCart}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(s => {
                return <li key={s.name}>
                  <button type="button" onClick={changeSize.bind(null, s.name)} className={clsx(s.name === currentSize && styles.active)}>{s.name}</button>
                </li>
              })}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(c => {
                return <li key={c}>
                  <button type="button" onClick={changeColor.bind(null, c)} className={clsx(prepareColorClassName(c), c === currentColor && styles.active)} />
                </li>
              })}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  title: PropTypes.string,
  basePrice: PropTypes.number,
  colors: PropTypes.array,
  sizes: PropTypes.array,
}

export default Product;