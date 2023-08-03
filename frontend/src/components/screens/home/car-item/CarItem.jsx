import { NavLink } from "react-router-dom";
import styles from "../Home.module.css";
import classNames from 'classnames/bind';


export const CarItem = ({
  car,
  deleteCarItem,
  id,
  hideButton,
}) => {
  return (
    <div key={car?.id} className={classNames(styles.item, hideButton && styles.items)}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${car?.image})` }}
      ></div>
      <div className={styles.info}>
        <h2>{car?.name}</h2>
        <p>{car?.price}$</p>

        <NavLink to={`/car/${id}`}>
          {!hideButton && (<button className="btn">Read more</button>)}
        </NavLink>
        {!hideButton && (
          <button
            className="btn"
            onClick={(e) => {
              deleteCarItem(id);
              e.preventDefault();
            }}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};


