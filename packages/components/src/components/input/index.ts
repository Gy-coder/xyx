import InternalInput from "./Input";
import Password from "./Password";
import TextArea from "./TextArea";

type InputType = typeof InternalInput & {
  Password: typeof Password;
  TextArea: typeof TextArea;
};

const Input = InternalInput as InputType;
Input.Password = Password;
Input.TextArea = TextArea;

export default Input;
