import React from 'react';
import InputField from '../../../components/functionals/InputField/InputField';
import './InputFieldTest.css';
import ReactLogo from '../../../assets/logo.svg';

const InputFieldTest = () => {
  return(
    <div className="input-field-test">
      <div className="input-field-container">
        <InputField
          fieldTitle="Email"
          placeholder="email"
          iconPath={ReactLogo}
          defaultStyle="underline"
        />
      </div>
    </div>
  );
}

export default InputFieldTest;