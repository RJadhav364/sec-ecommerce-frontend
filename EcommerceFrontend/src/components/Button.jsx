const Button = ({btnLabel,classes, onClick, insideELements}) => {
  return (
    <button className={classes} onClick={onClick}>{insideELements}{btnLabel}</button>
  )
}

export default Button
