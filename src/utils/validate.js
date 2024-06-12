export const CheckValidData = (name, email, password) => {
  const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  const isEmailValid = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isNameValid) return "Please Enter a Valid Name"
  if (!isEmailValid) return "Email ID is not Valid";
  if (!isPasswordValid) return "Please Enter a Valid Password";

  return null;
};
