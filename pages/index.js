import HomePage from '@/components/template/HomePage';
import Customer from '@/models/Customer';
import connectDB from '@/utils/connectDB';

export default function Index({ data }) {
  return (
    <>
      <HomePage customers={data} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    await connectDB();
    const customers = await Customer.find();
    return {
      props: { data: JSON.parse(JSON.stringify(customers)) },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        notFound: true,
      },
    };
  }
}
