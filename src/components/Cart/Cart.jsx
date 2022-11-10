import { useSelector } from "react-redux";
import { selectCart, selectCartTotal } from "../../store/cart/selectors";
import classnames from "classnames";
import styles from "./styles.module.css";
import { CartList } from "../CartList/CartList";
import { Link } from "react-router-dom";
export const Cart = () => {
  const cart = useSelector(selectCart);
  const total = useSelector(selectCartTotal);

  return (
    <div className={classnames(styles.block)}>
      <div className={classnames(styles.block__col)}>
        <h2 className={styles.block__title}>Ваш заказ:</h2>
        <ul className={styles.book__list}>
          {total === 0 && (
            <p>
              Вы еще ничего не выбрали, прейдите в <Link to="/">каталог</Link> и
              возвращайтесь!
            </p>
          )}
          {cart.map((position) => (
            <CartList key={position.bookId} position={position} />
          ))}
        </ul>
      </div>
      <div className={styles.block__row}>
        <div className={styles.block__total}>Итого: {total} &#8381;</div>
        <button className={styles.block__button}>Купить</button>
      </div>
    </div>
  );
};
