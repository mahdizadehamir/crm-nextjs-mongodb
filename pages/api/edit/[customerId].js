import Customer from '@/models/Customer';
import connectDB from '@/utils/connectDB';

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 'failed', message: 'error in connecting to db' });
  }

  if (req.method === 'PATCH') {
    const id = req.query.customerId;
    const data = req.body.data;
    try {
      const customer = await Customer.findOne({ _id: id });
      customer.name = data.name;
      customer.lastName = data.lastName;
      customer.email = data.email;
      customer.address = data.address;
      customer.phone = data.phone;
      customer.date = data.date;
      customer.products = data.products;
      customer.updateAt = Date.now();
      customer.save();
      res.status(201).json({ status: 'success', message: 'data edited successfully' });
    } catch (err) {
      res
        .status(500)
        .json({ status: 'failed', message: 'failed in deleting customer from dataBase' });
    }
  }
}
