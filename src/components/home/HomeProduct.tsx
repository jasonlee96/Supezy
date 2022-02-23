import {TitleLine, Button, Image, BackgroundBase} from "../common";
import {SlideIn, JiggleZoom, Shake, FadeIn} from "../animation";

function HomeProduct({header, title, description, href, buttonText}:{
  header: string,
  title: string,
  description: string,
  href: string,
  buttonText: string
}) {
    return (
      <div className="bg-main-pink-0">
        <div className="py-5">
            <TitleLine title={header} customTextCss="text-main" lineCss="bg-main-dark" />
        </div>
            <div className="row py-md-4 py-0 w-100 mx-0" style={{minHeight: "600px"}}>
                  <div className=" col-md-7 col-12 order-last order-md-first">
                    <SlideIn isLeft={true}>
                    <div className=" mx-auto text-center d-flex flex-column h-100" style={{maxWidth: "600px"}}>
                      <div className="spz-title fw-bolder py-4">{title}</div>
                      <div className="text-sub-main spz-description py-4">
                        {description}
                      </div>
                      <div className="mt-auto py-4">
                        <Button customCss="text-white bg-main-dark btn-hover-main w-75 w-sm-50" alignCss="justify-content-center " href={process.env.PUBLIC_URL + href} text={buttonText}/>
                      </div>
                    </div>
                    </SlideIn>
                  </div>
                  <div className="bg-main col-md-5 col-12 order-first order-md-last">
                    <SlideIn isLeft={false}>
                    <div className="float-end bg-main-pink-0 mx-3">
                        <BackgroundBase color="#FEC5BB">
                          <JiggleZoom>
                          <Image image={process.env.PUBLIC_URL + '/assets/img/products/SDM_3.png'} css="w-100 h-100"></Image>
                          </JiggleZoom>
                        </BackgroundBase>
                    </div>
                    </SlideIn>
                  </div>
              </div>
         </div>
    );
  }
  
  export default HomeProduct;