import {Image} from "../common";
function BenefitItem({image, title, description, customCss}:
    {
    image: string,
    title:string,
    description:string,
    customCss?: string
    }
) {
    return (
      <div className="d-flex flex-column justify-content-center py-3 py-lg-0">
        <div className="text-black px-4 py-2">
                <div className="text-center py-4 rounded">
                    <Image image={image} css={"d-flex mx-auto circle " + customCss} imageStyle={{width: "150px", height: "150px"}}/>
                  </div>
                <div className="text-center fw-bold fs-5 py-3">{title}</div>
                <div className="text-center font-size-16">{description}</div> 
        </div>
      </div>
    );
  }
  
  export default BenefitItem;