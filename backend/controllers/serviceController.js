import Service from "../models/Service.js";

export const getServices = async (req,res)=>{
const services = await Service.find();
res.json(services);
};

export const getSingleService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json(service);

  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const createService = async (req, res) => {
  try {
    if (!req.body.title || !req.body.description || !req.body.price) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const existing = await Service.findOne({ title: req.body.title });
    if (existing) {
      return res.status(400).json({
        message: "Service already exists"
      });
    }

    const newService = new Service(req.body);
    await newService.save();

    res.status(201).json(newService);

  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const updateService= async (req,res)=>{
  const updated = await Service.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
}

export const deleteService = async (req, res) => {
  try {
    const deleted = await Service.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json({ message: "Deleted successfully" });
    
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};