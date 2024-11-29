// backend/controllers/contactController.js
const Contact = require("../models/Contact");

exports.createContact = async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.status(201).json(contact);
};
