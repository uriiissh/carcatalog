import styles from "./CreateCarForm.module.css";



export const CreateCarForm = ({ form, setForm, createCarItem }) => {


  return (
    <form className={styles.form}>
      <input
        placeholder="Name"
        onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
        value={form.name}
      />
      <input
        placeholder="Price"
        onChange={(e) =>
          setForm((prev) => ({ ...prev, price: e.target.value }))
        }
        value={form.price}
      />
      <input
        placeholder="Image"
        onChange={(e) =>
          setForm((prev) => ({ ...prev, image: e.target.value }))
        }
        value={form.image}
      />
      <input
        placeholder="Info"
        onChange={(e) =>
          setForm((prev) => ({ ...prev, info: e.target.value }))
        }
        value={form.info}
      />

      <button
        className="btn"
        onClick={(e) => {
          createCarItem({
            name: form.name,
            price: form.price,
            image: form.image,
            info: form.info,
          });
          e.preventDefault();
        }}
      >
        Create
      </button>
    </form>
  );
};
