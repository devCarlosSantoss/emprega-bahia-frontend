/* eslint-disable react/prop-types */
import "./InputForm.css";

const InputForm = (props) => {
  return (
    <div className="inputForm-container">
      <label htmlFor={props.forId}>{props.children}</label>
      <input type={props.tipo} minLength={props.length} required={props.obrigatorio} id={props.Id} placeholder={props.placeholder}/>
    </div>
  );
};

export default InputForm;
