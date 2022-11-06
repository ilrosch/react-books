import { selectBookById } from "../../store/book/selectors";
import { useSelector } from "react-redux";
import classnames from "classnames";
import styles from "./styles.module.css";

export const CartList = ({ position }) => {
  // console.log(position);
  const book = useSelector(selectBookById(position.bookId));

  return (
    <li key={position.bookId} className={classnames(styles.position)}>
      <div className={classnames(styles.position__title)}>{book.name}</div>
      <div className={classnames(styles.position__price)}>
        {position.count > 1 ? `${position.count}шт × ` : ""}
        {book.price} &#8381;
      </div>
    </li>
  );
};
