import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadCartIfNotExist } from "../../store/cart/loadCartNotExist";
import { Cart } from "../../components/Cart/Cart";
import { Catalog } from "../../components/Сatalog/Catalog";
import classnames from "classnames";
import styles from "./styles.module.css";

export const CartPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCartIfNotExist);
  }, [dispatch]);

  return (
    <div className={classnames(styles.block)}>
      <div className={classnames(styles.block__col)}>
        <Cart />
      </div>

      <div className={classnames(styles.block__col)}>
        <Catalog displayCart={true} />
      </div>
    </div>
  );
};
