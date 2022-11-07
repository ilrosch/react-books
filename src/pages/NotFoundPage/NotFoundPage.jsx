import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const NotFoundPage = () => {
  return (
    <div>
      <h1 className={styles.header}>Упс, страница не найдена!</h1>
      <p className={styles.text}>
        Но есть другая не менее интересная (<Link to="/"> каталог </Link>){" "}
      </p>
    </div>
  );
};
