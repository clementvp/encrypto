import bcrypt from "bcryptjs";

const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

export default comparePassword;
