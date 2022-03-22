import { BackgroundBase, Image } from '../common';
import { Direction, Certification} from "../../context/Model";
import {SlideIn, Shake} from "../animation";

function DirectionCert({direction, cert}:{
    direction?: Direction,
    cert?: Certification
}) {
    return (
      <div className="">
        <div className="col-12 bg-main-pink row mx-0">
            <div className="col-12 col-lg-6 bg-main-pink p-5 order-1 order-lg-1">
                <div className="fw-bolder spz-title text-center">{direction?.title}</div>
                <div className="px-3 py-4 font-size-16 fw-bold text-center text-black">{direction?.description}</div>
            </div>
            <div className="col-12 col-lg-6 bg-main-pink-0 p-5 order-3 order-lg-1">
                <div className="fw-bolder spz-title text-center">{cert?.title}</div>
                <div className=" px-3 text-center font-size-16 fw-bold py-4 text-sub-main">{cert?.description}</div>
            </div>

            <div className="col-12 col-lg-4 bg-main-pink p-5 px-3 px-sm-5 order-1 order-lg-1">
                <div className="ms-0 ps-0 ms-xxl-4 ps-xxl-5 text-center text-lg-start">
                    {direction?.items.map(item =>
                        <SlideIn isLeft={true} key={item.key}>
                        <div className="col-12 col-sm-10 col-md-7 col-lg-12 mx-auto" key={item.key}>
                            <div className="fs-3 fw-bold">{item.title}</div>
                            <div className="ms-1 ms-sm-5 text-black">
                                <ul className="py-3">
                                    {item.items.map(item => 
                                        <li className="py-2 fs-5" key={item.key}>{item.step}</li>
                                        )}
                                </ul>
                            </div>
                        </div>
                        </SlideIn>
                        )}
                </div>
            </div>

            <div className="col-12 col-lg-4 bg-cust-cert px-5 order-2 order-lg-2">
                <div className="m-auto" style={{maxWidth: "500px"}}>
                    
                            <BackgroundBase css="" color="#D8E2DC">
                            <Shake>
                          <Image image={process.env.PUBLIC_URL + '/assets/img/products/SDM_6.png'} css="w-100 h-100"></Image>
                          </Shake>
                          </BackgroundBase>
                          
                </div>
            </div>

            <div className="col-12 col-lg-4 bg-main-pink-0 p-5 order-3 order-lg-3">
                <div className=" text-center text-lg-start">
                    {cert?.items.map(item => 
                        <SlideIn key={item.key}>
                        <div className="col-12 col-sm-10 col-md-7 col-lg-12 mx-auto fw-bold mb-4 border-cust-cert" key={item.key}>
                            <div className="fs-4 py-2">{item.title}</div>
                            <div className="fs-5 px-2 text-sub-main ">{item.name}</div>
                        </div>
                        </SlideIn>
                        )}
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default DirectionCert;