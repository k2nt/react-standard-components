import React, { ButtonHTMLAttributes } from 'react';
import './Button.scss';



/**
 * @type button attribute types
 */
type ButtonVariants = "primary" | "secondary" | "safe" | "warning" | "danger" | "link";
type ButtonDefaultFills = "solid" | "outline";
type ButtonDefaultStyles = "squared" | "rounded"
type ButtonDefaultSizes = "large" | "small" | "wrap";



/**
 * @interface ButtonProps
 * 
 * Inherit standard HTML button attributes, also supports some API attributes 
 * (see document at <insert link>)
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  
  /**
   * @api parameters
   */
  name? : string;
  defaultVariant? : ButtonVariants;
  defaultFill? : ButtonDefaultFills;
  defaultStyle? : ButtonDefaultStyles;
  defaultSize? : ButtonDefaultSizes;
} // interface ButtonProps



const Button = (
  {
    name           = "",
    defaultVariant = "primary",
    defaultStyle   = "squared",
    defaultFill    = "solid",
    defaultSize    = "small",
    ...props
  } : ButtonProps
) => {


  const buttonProps : ButtonProps = {
    className : `btn ${name} btn--${defaultVariant} btn--${defaultFill} btn--${defaultStyle} btn--${defaultSize}`,
    ...props
  };

  return(
      <button {...buttonProps} />
  );
} // const Button

export default Button;