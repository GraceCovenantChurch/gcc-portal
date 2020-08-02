export const INITIAL_USER_DATA = {
  email: "",
  familyName: "",
  givenName: "",
  googleId: "",
  imageUrl: "",
  name: "",
};

const validate = async (token) => {
  return true;
};

export const user = {
  validate: () => validate(),
};

export default user;
