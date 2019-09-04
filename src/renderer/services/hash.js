import bcrypt from "bcryptjs";

const hashMasterPassword = masterPassword => {
  return bcrypt.hashSync(masterPassword, 10);
};

export default hashMasterPassword;
