import React from 'react';
import './ButtonTest.css';
import Button from '../../../components/functionals/Button/Button';
import ReactLogo from '../../../assets/logo.svg';

const ButtonTest = () => {
  return(
    <div className="button-test">
      <Button
        defaultStyle = "rounded"
        defaultSize = "small" 
        defaultVariant = "danger"
        children = "Sign up"
      />
      <Button
        defaultStyle = "squared"
        defaultFill = "outline"
        defaultSize = "small" 
        defaultVariant = "link"
        children = "Log in"
      />
      <Button
        defaultStyle = "rounded"
        defaultFill = "outline"
        defaultSize = "wrap"
        defaultVariant = "secondary"
        children = {<img src = {ReactLogo} alt = "react-logo" style = {{width: '80px', height: '80px'}}></img>}
      />
    </div>    
  );
}

export default ButtonTest;