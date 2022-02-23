
function BackgroundBase ({css, color, bgClass, children, imageStyle}:{
    css?: string,
    bgClass?: string,
    color: string,
    children: React.ReactNode
    imageStyle?: React.CSSProperties
}) {
    return (
        <div className={"custom-bg-base " + css} style={{...imageStyle}}>
            {children}
            <div className={bgClass ? bgClass : "custom-bg-base-after" } style={{ backgroundColor: color}}></div>
        </div>
      );
  }

export default BackgroundBase;