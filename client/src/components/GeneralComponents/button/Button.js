import './button.css';

const STYLES =['btn--primary','btn--outline'];
const SIZES=['btn--medium','btn--large','btn--mobile','btn--wide'];
const COLOR=['primary','blue','red','green'];

export const  Button=({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttoncolor
}) =>{
const checkButtonStyle=STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
const checkButtonSize=SIZES.includes(buttonSize)  ? buttonSize : SIZES[0];
const checkButtonColor=COLOR.includes(buttoncolor)  ? buttoncolor : null;
return(
        <button className={`bttn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} 
        onClick={onClick}
        type={type}>
            {children}
        </button>

);
}