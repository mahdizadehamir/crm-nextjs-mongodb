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
    console.log(products);
  };
  return (
    <div className="item-list">
      <p>Purchased Products</p>
      {products.map((product, index) => (
        <ProductItem
          product={product}
          key={index}
          changeHandler={(e) => changeHandler(e, index)}
          removeHandler={() => removeHandler(index)}
        />
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
}

export default ItemList;

function ProductItem({ product, removeHandler, changeHandler }) {
  return (
    <div className="form-input__list">
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
  );
}
