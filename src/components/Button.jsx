/* eslint-disable react/prop-types */


function Button({ buttonName, className }) {
    return <button className={`button ${className}`}>{buttonName}</button>;
}

export default Button