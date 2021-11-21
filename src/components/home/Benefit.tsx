import {TitleEllipse, Button} from "../common";
import BenefitGrid from "./BenefitGrid";

function Benefit() {
    return (
      <div className="bg-main-pink-0" style={{overflowY:"clip"}}>
        <div className="pt-5 container px-0">
            <div className="row">
                <div className="col-md-5 col-sm-12">
                    <TitleEllipse title="Why Nuts" customTextCss="text-main" />
                </div>
            </div>
        </div>
            <div className="d-flex flex-row py-4" style={{minHeight: "800px"}}>
                  <div className="col-md-6 col-sm-12">
                      <div className="h-100 bg-main-darker " style={{ marginLeft: "10%", marginRight:"10%"}}></div>
                  </div>
                  <div className=" col-md-6 col-sm-12">
                    
                    <div className=" mx-auto px-4 d-flex flex-column h-100">
                      <div className="fs-1 fw-bolder py-4">Title</div>
                      <div className="text-sub-main fs-6 py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nam rem eum perferendis veritatis, obcaecati aut reprehenderit fuga placeat illum quis aperiam id consequuntur iusto eos at nemo exercitationem earum.</div>
                      <div className="py-4">
                        <BenefitGrid title="title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nam rem eum perferendis veritatis, obcaecati aut reprehenderit fuga placeat illum quis aperiam id consequuntur iusto eos at nemo exercitationem earum." icon="fas fa-heartbeat">
                        </BenefitGrid>
                        <BenefitGrid title="title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nam rem eum perferendis veritatis, obcaecati aut reprehenderit fuga placeat illum quis aperiam id consequuntur iusto eos at nemo exercitationem earum." icon="fas fa-heartbeat">
                        </BenefitGrid>
                        <BenefitGrid title="title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nam rem eum perferendis veritatis, obcaecati aut reprehenderit fuga placeat illum quis aperiam id consequuntur iusto eos at nemo exercitationem earum." icon="fas fa-heartbeat">
                        </BenefitGrid>
                      </div>
                    </div>
                  </div>
                  
              </div>
         </div>
    );
  }
  
  export default Benefit;