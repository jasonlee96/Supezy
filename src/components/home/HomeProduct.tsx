import {TitleLine, Button} from "../common";
function HomeProduct() {
    return (
      <div className="bg-main-pink-0">
        <div className="py-5">
            <TitleLine title="Our Products" customTextCss="text-main" lineCss="bg-main-dark" />
        </div>
            <div className="d-flex flex-row py-4" style={{minHeight: "800px"}}>
                  <div className=" col-md-7">
                    
                    <div className=" mx-auto text-center d-flex flex-column h-100" style={{maxWidth: "600px"}}>
                      <div className="fs-1 fw-bolder py-4">Title</div>
                      <div className="text-sub-main fs-6 py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nam rem eum perferendis veritatis, obcaecati aut reprehenderit fuga placeat illum quis aperiam id consequuntur iusto eos at nemo exercitationem earum.</div>
                      <div className="mt-auto py-4">
                        <Button customCss="text-white bg-main-dark btn-hover-main" href="#" text="View Product"/>
                      </div>
                    </div>
                  </div>
                  <div className="bg-main col-md-5">
                    <div className="float-end bg-main-pink-0">Test</div>
                  </div>
              </div>
         </div>
    );
  }
  
  export default HomeProduct;