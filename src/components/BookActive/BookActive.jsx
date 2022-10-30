import classnames from "classnames";
import styles from "./styles.module.css";
import {useState} from "react";
export const BookActive = ({book}) => {
    const [count, setCount] = useState(0);
    return <div className={classnames(styles.card)}>
        <div className={classnames(styles.card__block)}>
            <h3 className={classnames(styles.card__title)}>{book.name}</h3>
            <h4 className={classnames(styles.card__subtitle)}>{book.author}</h4>
            <h4 className={classnames(styles.card__subtitle)}>{book.genre}</h4>
            <div>{book.rating}</div>
            <h3 className={classnames(styles.card__price)}>{book.price} &#8381;</h3>
        </div>
        <div className={classnames(styles.card__block)}>
            <div className={classnames(styles.card__center)}>
                <button className={classnames(styles.card__button)} onClick={() => setCount(count - 1)} disabled={count === 0}>—</button>
                <p className={classnames(styles.card__count)}>{count}</p>
                <button className={classnames(styles.card__button_plus)} onClick={() => setCount(count + 1)} disabled={count === 25}>╋</button>
            </div>
        </div>
    </div>
}