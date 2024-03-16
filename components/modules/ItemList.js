import FormInput from './FormInput';

function ItemList({ form, setForm }) {
  const { products } = form;
  const addHandler = () => {
    setForm({
      ...form,
      products: [
        ...products,
        {
          name: '',
          price: '',
          qty: '',
        },
      ],
    });
    console.log(products);
  };
  const removeHandler = () => {};
  const changeHandler = () => {};
  return (
    <div className="item-list">
      <p>Purchased Products</p>
      {products.map((product, index) => (
        <div key={index} className="form-input__list">
          <FormInput
            name="name"
            value={product.name}
            type="text"
            label="Product Name"
            onChange={changeHandler}
          />
          <div>
            <FormInput
              name="Price"
              value={product.price}
              type="text"
              label="Price"
              onChange={changeHandler}
            />
            <FormInput
              name="qty"
              value={product.qty}
              type="number"
              label="qty"
              onChange={changeHandler}
            />
          </div>
          <button onClick={removeHandler}>Remove</button>
        </div>
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
}

export default ItemList;
