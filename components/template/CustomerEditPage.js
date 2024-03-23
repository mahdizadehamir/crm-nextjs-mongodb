import { useState } from 'react';
import Form from '../modules/Form';
import { useRouter } from 'next/router';

function CustomerEditPage({ data, id }) {
  const router = useRouter();
  const cancelHandler = () => {
    router.push('/');
  };
  const editHandler = async () => {
    const res = await fetch(`/api/edit/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ data: form }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    console.log(data);
  };
  const [form, setForm] = useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || '',
    postalCode: data.postalCode || '',
    address: data.address || '',
    date: data.date || '',
    products: data.products || [],
  });
  return (
    <div className="customer-page">
      <h4>Customer Edit</h4>
      <Form form={form} setForm={setForm} />
      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={editHandler}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default CustomerEditPage;
