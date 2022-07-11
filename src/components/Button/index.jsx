const Button = ({ text, type, handleClick, classN }) => {
  return(
    <button type={type} onClick={() => handleClick()} className={classN}>
      {text}
    </button>
  )
}

export default Button;
