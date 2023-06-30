import OptionSize from "../OptionSize/OptionSize";
import OptionColor from "../OptionColor/OptionColor";
import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const ProductForm = (props) => {
    return (<form onSubmit={props.onSubmitAction}>
        <OptionSize sizes={props.sizes} currentSize={props.currentSize} changeSize={props.changeSize} />
        <OptionColor colors={props.colors} currentColor={props.currentColor} changeColor={props.changeColor} />
        <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
        </Button>
    </form>)
}

ProductForm.propTypes = {
    onSubmitAction: PropTypes.func,
    currentSize: PropTypes.string,
    currentColor: PropTypes.string,
    sizes: PropTypes.array,
    colors: PropTypes.array,
    changeSize: PropTypes.func,
    changeColor: PropTypes.func,
}

export default ProductForm;