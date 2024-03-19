import Customer from '@/models/Customer';

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res.status(500), json({ status: 'failed', message: 'error in connecting to db' });
  }
  const id = req.query.customerId;
  const data = req.body.data;

  if (req.method === 'PATCH') {
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
    } catch (err) {
      res
        .status(500)
        .json({ status: 'failed', message: 'failed in deleting customer from dataBase' });
    }
  }
}
