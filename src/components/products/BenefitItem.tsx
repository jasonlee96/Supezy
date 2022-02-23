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
      <div className="py-5 d-flex flex-column justify-content-center my-5">
        <div className="text-black">
                <div className="text-center py-4 rounded">
                    <Image image={image} css={"d-flex mx-auto circle " + customCss} imageStyle={{width: "250px", height: "250px"}}/>
                  </div>
                <div className="text-center fw-bold fs-3 py-3">{title}</div>
                <div className="text-center fs-5">{description}</div> 
        </div>
      </div>
    );
  }
  
  export default BenefitItem;