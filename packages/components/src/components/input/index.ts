import InternalInput from "./Input";
import Password from "./Password";

type InputType = typeof InternalInput & {
  Password: typeof Password;
};

const Input = InternalInput as InputType;
Input.Password = Password;

export default Input;
