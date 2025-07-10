const CustomIcon = ({classes, insideContent,handleIconActive}) => {
  return (
    <span className={classes} onClick={handleIconActive}>{insideContent}</span>
  )
}

export default CustomIcon
