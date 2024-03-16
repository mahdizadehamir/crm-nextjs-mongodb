import { useState } from 'react';
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
          Price: '',
          qty: '',
        },
      ],
    });
  };
  const removeHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setForm({ ...form, products: newProducts });
  };
  const changeHandler = (e, index) => {
    const newProducts = [...products];
    newProducts[index][e.target.name] = e.target.value;
    setForm({
      ...form,
      products: newProducts,
    });
  };
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
            onChange={(e) => changeHandler(e, index)}
          />
          <div>
            <FormInput
              name="Price"
              value={product.price}
              type="text"
              label="Price"
              onChange={(e) => changeHandler(e, index)}
            />
            <FormInput
              name="qty"
              value={product.qty}
              type="number"
              label="qty"
              onChange={(e) => changeHandler(e, index)}
            />
          </div>
          <button onClick={() => removeHandler(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
}

export default ItemList;
