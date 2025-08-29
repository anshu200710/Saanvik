import jwt from "jsonwebtoken";

export const adminLogin = (req, res) => {
  const { email, password } = req.body;

  // ✅ sirf env se check karna hai
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign(
      { role: "admin" }, 
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    return res.json({ token, role: "admin" });
  }

  return res.status(401).json({ message: "Invalid admin credentials" });
};
