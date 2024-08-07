const { z } = require("zod");

//creating object Schema
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is Required" })
    .trim()
    .min(3, { message: "Name must be atleast 3 character" })
    .max(10, { message: "Name must not be more than 10 character" }),

  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Inavalid Email address" })
    .min(3, { message: "Email must be atleast 3 character" })
    .max(50, { message: "Email must not be more than 50 character" }),

  phone: z
    .string({ required_error: "Phone Number is Required" })
    .trim()
    .min(10, { message: "Phone Number must be atleast 10 character" })
    .max(12, { message: "Phone Number must not be more than 12 character" }),

  password: z
    .string({ required_error: "Password is Required" })
    .trim()
    .min(6, { message: "Password must be atleast 6 character" })
    .max(30, { message: "Password must not be more than 30 character" }),
});

module.exports = signupSchema;