import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();

    res.status(201).json({
      message: "Message sent successfully",
      contact
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);

    res.json({ message: "Contact deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateContactStatus = async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json(updated);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};