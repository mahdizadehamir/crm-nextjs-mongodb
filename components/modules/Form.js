import FormInput from './FormInput';
import ItemList from './ItemList';

function Form({ form, setForm }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div>
      <FormInput label="Name" name="name" type="text" value={form.name} onChange={changeHandler} />
      <FormInput
        label="Last Name"
        name="lastName"
        type="text"
        value={form.lastName}
        onChange={changeHandler}
      />
      <FormInput
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={changeHandler}
      />
      <FormInput
        label="Phone"
        name="phone"
        type="tel"
        value={form.phone}
        onChange={changeHandler}
      />
      <FormInput
        label="Address"
        name="address"
        type="text"
        value={form.address}
        onChange={changeHandler}
      />
      <FormInput
        label="Postal Code"
        name="postalCode"
        type="number"
        value={form.postalCode}
        onChange={changeHandler}
      />
      <FormInput label="Date" name="date" type="date" value={form.date} onChange={changeHandler} />
      <ItemList form={form} setForm={setForm} />
    </div>
  );
}

export default Form;
