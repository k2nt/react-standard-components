import React from 'react';
import './InputField.scss';

/**
 * @type Input Field attribute types
 */
type defaultStyle = "square" | "round" | "underline";


/**
 * @interface InputFieldProps
 */
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  
  name?         : string;
  value?        : string;
  type?         : "button" | "checkbox" | "email" | "file" | "password" | "text" 
                    | "tel" | "search" | "date" | "number" | "submit";

  /**  
   * @api fields
  */
  iconPath?     : string;
  defaultStyle? : defaultStyle;
  fieldTitle?   : string;
}


/**
 * Input Field component
 */
const InputField = (
  {
    name         = "",
    type         = "text",
    defaultStyle = "square",
    iconPath     = "",
    fieldTitle   = "",
    ...props
  } : InputFieldProps
) => {

  const inputFieldBarContainerProps : InputFieldProps = {
    className : `input-field-bar-container ${name} input-field--${defaultStyle}`
  }

  const inputFieldProps : InputFieldProps = {
    ...props
  }

  return(
    <div className='input-field'>
      {
        fieldTitle !== "" && 
        <h5 className="input-field-title">{fieldTitle}</h5>
      }
      <div {...inputFieldBarContainerProps}>
        {
          iconPath !== "" &&
          <img 
            src={iconPath}
            alt="input-field-icon"
          />
        }
        <input {...inputFieldProps} type="1"/>
      </div>
    </div>
  );
}

export default InputField;