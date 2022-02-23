import {TitleEllipse, Button, Image} from "../common";
import BenefitGrid from "./BenefitGrid";
import { HomeBenefitViewModel} from "../../context/Model";
import {SlideIn} from "../animation";

function Benefit({ benefit }:{
  benefit?: HomeBenefitViewModel
}) {
    return (
      <div className="bg-main-pink-0" style={{overflow:"clip"}}>
        <div className="pt-5 container px-0">
            <div className="row">
                <div className="col-md-5 col-12">
                    <TitleEllipse title={benefit?.title ?? ""} customTextCss="text-main" />
                </div>
            </div>
        </div>
            <div className="row py-4 w-100 mx-auto" style={{minHeight: "800px"}}>
                  <div className="col-md-6 col-12 px-0">
                    <div className="img-sticky" style={{top: "15%"}}>
                      <SlideIn isLeft={true}>
                        <Image image={process.env.PUBLIC_URL + '/assets/img/home/nuts.png'} css="px-0 mx-0 px-md-5 mx-lg-4 " imageStyle={{
                          minHeight: "300px",
                          minWidth: "300px"
                        }}></Image>
                        </SlideIn>
                    </div>
                      
                  </div>
                  <div className=" col-md-6 col-12">
                    <SlideIn isLeft={false}>
                    <div className="mx-auto px-5 px-md-4 d-flex flex-column h-100">
                      <div className="spz-title fw-bolder py-4">{benefit?.subtitle ?? ""}</div>
                      <div className="text-sub-main spz-description py-4">{benefit?.description ?? ""}</div>
                      <div className="py-4">
                        {benefit?.list.map((item, idx) => 
                        <BenefitGrid 
                          title={item.title}
                          description={item.description} 
                          
                          key={item.key}
                          >
                            <Image
                              image={process.env.PUBLIC_URL + '/assets/img/bg/number' + (idx+1) +'.png'} css="" imageStyle={{
                                width: "50px",
                                height: "50px",
                                minWidth: "50px"
                              }}
                            ></Image>
                          </BenefitGrid>)}
                      </div>
                    </div>
                    </SlideIn>
                  </div>
                  
              </div>
         </div>
    );
  }
  
  export default Benefit;