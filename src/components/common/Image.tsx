
function Image ({image, css, imageStyle}:{
    image: string,
    css?: string,
    imageStyle?: React.CSSProperties
}) {
    return (
        <img className={"img-fluid " +css} style={{...imageStyle}} src={image}>
        </img>
      );
  }

export default Image;