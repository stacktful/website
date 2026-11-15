function Tile({ children, ...props }) {
  // const class = `tile ${props.className}`;
  const { className, ...otherProps } = props;
  return (
    <div className={`tile ${className}`} {...otherProps}>
      {children}
    </div>
  );
}

export default Tile;
