import styles from './Product.module.scss';
import PropTypes from 'prop-types'
import { useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const changeSize = (selectedSize) => {
    setCurrentSize(selectedSize);
  }

  const changeColor = (selectedColor) => {
    setCurrentColor(selectedColor);
  }

  const currentPrice = useMemo(() => {
    return props.basePrice + props.sizes.find(s => s.name === currentSize).additionalPrice;
  }, [currentSize])

  const addToCart = (e) => {
    e.preventDefault();
    console.group('Summary')
    console.log('Name: ', props.title)
    console.log('Price: ', currentPrice)
    console.log('Size: ', currentSize)
    console.log('Color: ', currentColor)
    console.groupEnd();
  }

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor} />

      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {currentPrice}$</span>
        </header>

        <ProductForm
          onSubmitAction={addToCart}
          currentSize={currentSize}
          currentColor={currentColor}
          sizes={props.sizes}
          colors={props.colors}
          changeSize={changeSize}
          changeColor={changeColor}
        />
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