const Contact = require("../models/contact-model.js");

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({ msg: "Message Send Successfully" });
  } catch (error) {
    return res.status(500).json({ msg: "Message Not Deliverd" });
  }
};

module.exports = contactForm;
