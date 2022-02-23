import { useState, useEffect } from "react";
function ImageOverlay({image, title, children, href, customCss, titleCss, disableMobileImage = false}:
    {
    image: string,
    title:string,
    children?: React.ReactNode
    href?: string,
    customCss?: string,
    titleCss?: string,
    disableMobileImage?: boolean
    }
) {
    const [imageUrl, setImageUrl] = useState(image);
    const [imageSize, setImageSize] = useState("cover");

    function checkImage(){
        if(!disableMobileImage){
            if(window.innerWidth < 1024){
                var pos = image.lastIndexOf('.');
                var file = image.substring(0,pos);
                var ext = image.substring(pos, image.length);
                setImageUrl(file+"_m"+ext);
                setImageSize("cover");
            }else{
                setImageUrl(image);
                setImageSize("contain");
            } 
        }
    }
    useEffect(function(){
        checkImage();
        window.addEventListener('resize', checkImage);
    }, [])

    if(href){
        return (
            <div className="bg-trans">
                <a href={href ?? "#"}>
                <div className={"bg-image-overlay " + customCss} style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover"
                }}>
                    <h1 className={"px-4 py-5 text-white cn-sp-font letter-space " + titleCss}>{title}</h1>
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
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                    <h1 className={"px-4 py-5 text-white cn-sp-font letter-space " + titleCss}>{title}</h1>
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