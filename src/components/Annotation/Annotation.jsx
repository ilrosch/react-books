import styles from "./styles.module.css";
import classnames from "classnames";
export const Annotation = ({book}) => {
  return <div className={classnames(styles.block)}>
    <h2 className={classnames(styles.block__title)}>Аннотация</h2>
    <p className={classnames(styles.block__text)}>{book.book[0].annotation}</p>
  </div>
}