import Customer from '@/models/Customer';
import connectDB from '@/utils/connectDB';

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res.status(500), json({ status: 'failed', message: 'error in connecting to db' });
  }
  const id = req.query.customerId;
  console.log(id);
  if (req.method === 'DELETE') {
    try {
      await Customer.deleteOne({ _id: id });
      res.status(200).json({ status: 'success', message: 'data deleted' });
    } catch (err) {
      res
        .status(500)
        .json({ status: 'failed', message: 'failed in deleting customer from dataBase' });
    }
  }
}
