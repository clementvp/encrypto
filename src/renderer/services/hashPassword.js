import bcrypt from "bcryptjs";

const hashPassword = masterPassword => {
  return bcrypt.hashSync(masterPassword, 10);
};

export default hashPassword;
