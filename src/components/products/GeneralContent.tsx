import {Image} from"../common";
function GeneralContent({image, title, description, customCss, customImageStyle, isLocateLeft}:
    {
    image: string,
    title:string,
    description:string,
    customCss?: string,
    customImageStyle?: React.CSSProperties,
    isLocateLeft:boolean
    }
) {
    return (
      <div className="py-5 px-4 px-0 px-xl-5 d-flex flex-row justify-content-center">
        <div className="row w-100">
            <div className={"d-flex flex-column col-12 col-xl-8 justify-content-center px-xl-5 pt-5 pt-xl-1 " + (isLocateLeft ? "order-last order-xl-last" : "order-last order-xl-first")}>
                <div className="spz-title fw-bold text-sub-main py-4">{title}</div>
                <div className="spz-description text-black pb-4">{description}</div>
            </div>
            <div className={"col-12 col-xl-4 px-0 " + (isLocateLeft ? "order-first order-xl-first" : "order-first order-xl-last")}>
                <Image image={image} css={"d-flex mx-auto " + customCss} imageStyle={customImageStyle}/>
            </div>
        </div>
      </div>
    );
  }
  
  export default GeneralContent;