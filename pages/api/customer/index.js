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
  if (req.method === 'POST') {
    const { data } = req.body;
    if (!data.name || !data.lastName || !data.email) {
      res.status(400).json({ status: 'failed', message: 'Invalid Data' });
      return;
    }
    try {
      const customer = await Customer.create(data);
      res.status(201).json({ status: 'success', message: 'Data Created', data: { customer } });
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: 'success', message: 'Error in Storing Data' });
    }
  }
}
