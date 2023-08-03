import { useState, useEffect, useContext } from "react";
import { CarItem } from "./car-item/CarItem";
import { CreateCarForm } from "./creat-car-form/CreateCarForm";


const clearData = {
  name: "",
  price: "",
  image: "",
  info:"",
};

export const Home = () => {
  const [cars, setCars] = useState([]);
  const [form, setForm] = useState(clearData);

  const createCarItem = async (data) => {
    let formData = new FormData();
    formData.append("data", JSON.stringify(data));

    const response = await fetch("http://localhost:1337/api/carss", {
      method: "POST",
      body: formData,
    })
      .then(() => getCarsList())
      .then(() => setForm(clearData));
  };

  const getCarsList = async () => {
    const response = await fetch("http://localhost:1337/api/carss");
    const data = await response.json();

    setCars(
      data.data.map((element) => ({
        id: element.id,
        name: element.attributes.name,
        price: element.attributes.price,
        image: element.attributes.image,
      }))
    );
  };

  const deleteCarItem = async (id) => {
    const response = await fetch(`http://localhost:1337/api/carss/${id}`, {
      method: "DELETE",
    }).then(() => getCarsList());
  };

  useEffect(() => {
    getCarsList();
  }, []);

  return (
    <div>
      <h1>Cars Catalog</h1>

      <CreateCarForm
        setForm={setForm}
        form={form}
        createCarItem={createCarItem}
      />
      <div className="cards">
        {cars.length ? (
          cars.map((car) => (
            <CarItem
              key={car.id}
              car={car}
              id={car.id}
              deleteCarItem={deleteCarItem}
            />
          ))
        ) : (
          <p>There are no cars</p>
        )}
      </div>
    </div>
  );
};

export default Home;
