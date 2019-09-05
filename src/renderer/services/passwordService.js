import bcrypt from "bcryptjs";

const hashPassword = masterPassword => {
  return bcrypt.hashSync(masterPassword, 10);
};
const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

export { hashPassword, comparePassword };
