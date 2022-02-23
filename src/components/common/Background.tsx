
function Background ({image, css, children, imageStyle}:{
    image: string,
    css?: string,
    children: React.ReactNode
    imageStyle?: React.CSSProperties
}) {
    return (
        <div className={css} style={{...imageStyle, backgroundImage:`url(${image})`}}>
            {children}
        </div>
      );
  }

export default Background;