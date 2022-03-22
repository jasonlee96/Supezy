import { BackgroundBase, Image } from '../common';
import {SlideIn, JiggleZoom} from "../animation";
import {NutritionFact} from "../../context/Model";

function Nutrition({nutrition}:{
    nutrition?: NutritionFact
}) {
    return (
      <div className="row mx-0 px-0">
        <div className='col-12 col-lg-6 bg-main-dark'>
            <SlideIn isLeft={true}>
                <JiggleZoom>
                    <BackgroundBase bgClass="custom-bg-base-1" css="mx-auto" imageStyle={{maxWidth: "500px", maxHeight: "500px"}} color="#FEC5BB">
                        <Image image={process.env.PUBLIC_URL + '/assets/img/products/SDM_5.png'} css="w-100 h-100"></Image>
                    </BackgroundBase>
                </JiggleZoom>
            </SlideIn>
        </div>
        <div className='col-12 col-lg-6 d-flex  align-self-center'>
            <div className="container text-center aligns-item-center py-3 text-black">
                <div className="spz-title fw-bolder py-3 mb-4 bg-main-dark  w-50 text-center mx-auto" style={{borderRadius:"50px", color:"#FAE1DD"}}>{nutrition?.header ?? ""}</div>
                
                <div className="container py-4 px-0 px-lg-4">
                    <div className="row py-2 border-dark border-top border-bottom border-3">
                        <div className="col-6"></div>
                        <div className="font-size-18 col-3">{nutrition?.col1 ?? ""}</div>
                        <div className="font-size-18 col-3">{nutrition?.col2 ?? ""}</div>
                    </div>
                    {nutrition?.nutritions.map((item) => (
                        <div className="row py-2 " key={item.key}>
                            <div className="col-6 font-size-18">{item.name}</div>
                            <div className="font-size-14 col-3">{item.col1} <i>{item.unit}</i></div>
                            <div className="font-size-14 col-3">{item.col2} <i>{item.unit}</i></div>
                        </div>
                    ))}
                    
                    <div className="row py-2 border-top border-3 border-dark">
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Nutrition;