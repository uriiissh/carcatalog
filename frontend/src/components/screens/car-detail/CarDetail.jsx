import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CarItem } from "../home/car-item/CarItem";
import styles from "./CarDetail.module.css";

export const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState();

  const getById = async () => {
    const response = await fetch(`http://localhost:1337/api/carss/${id}`);
    const data = await response.json();

    setCar({
      id: data.data.id,
      name: data.data.attributes.name,
      price: data.data.attributes.price,
      image: data.data.attributes.image,
      info: data.data.attributes.info,
    });
  };

  useEffect(() => {
    getById();
  }, []);

  return (
    <div className={styles.carcard}>
      <Link to="/">
        <button className={styles.btn}>Back</button>
      </Link>
      <div className={styles.cardimg}>
        <CarItem hideButton={true} car={car} />
      </div>
      <div className={styles.carinfo}>{car?.info}</div>
    </div>
  );
};

export default CarDetail;
