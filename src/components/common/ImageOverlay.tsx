function ImageOverlay({image, title, children, href, customCss, titleCss}:
    {
    image: string,
    title:string,
    children?: React.ReactNode
    href?: string,
    customCss?: string,
    titleCss?: string
    }
) {
    if(href){
        return (
            <div className="bg-trans">
                <a href={href ?? "#"}>
                <div className={"bg-image-overlay " + customCss} style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover"
                }}>
                    <h1 className={"px-4 py-5 text-white " + titleCss}>{title}</h1>
                </div>
                {children &&
                  <div className="bg-white bg-image-overlay-description px-5 py-3 fs-5">
                      {children}
                  </div>
                  }
                </a>
              </div>
          );
    }else{
        return (
            <div className="bg-trans">
                <div className={"bg-image-overlay " + customCss} style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover"
                }}>
                    <h1 className="px-4 py-5 text-white">{title}</h1>
                </div>
                {children &&
                  <div className="bg-white bg-image-overlay-description px-5 py-3 fs-5">
                      {children}
                  </div>
                  }
              </div>
          );
    }
    
  }
  
  export default ImageOverlay;