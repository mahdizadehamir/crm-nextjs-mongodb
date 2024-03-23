import Customer from '@/models/Customer';
import connectDB from '@/utils/connectDB';
export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log('failed to connect to database');
    res.status(500).json({ status: 'failed', message: 'Can not Connect To DB' });
    return;
  }
  if (req.method === 'GET') {
    const id = req.query.customerId;
    try {
      const customer = await Customer.findOne({ _id: id });
      res.status(200).json({ status: 'success', data: customer });
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: 'failed', message: 'error in retrieving data from database' });
    }
  }
}
