/* eslint-disable react/prop-types */
import "./InputForm.css";

const InputForm = (props) => {
  return (
    <div className="inputForm-container">
      <label htmlFor={props.forId}>{props.children}</label>
      <input
        className="form-control"
        type={props.tipo}
        minLength={props.length}
        maxLength={props.maxLength}
        value={props.value}
        required={props.obrigatorio}
        id={props.Id}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputForm;
