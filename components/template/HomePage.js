import Card from '../modules/Card';

function HomePage({ customers }) {
  return (
    <div>
      {customers.map((customer) => (
        <Card customer={customer} key={customer._id} />
      ))}
    </div>
  );
}

export default HomePage;
