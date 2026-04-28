import Inquiry from "../models/Inquiry.js";

export const createInquiry = async (req, res) => {
  const data = new Inquiry(req.body);
  await data.save();
  res.json(data);
};

export const getInquiries = async (req, res) => {
  const data = await Inquiry.find();
  res.json(data);
};