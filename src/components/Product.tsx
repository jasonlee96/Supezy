import {TitleLine, TitleEllipse, Button, ImageOverlay, Divider} from './common';
import { GeneralContent, BenefitItem, IngredientList, NotePad, DirectionCert } from './products';
function Product() {
    return (
      <div className="min-vh-100 bg-main" style={{paddingTop:"11px"}}>
            <ImageOverlay title="Product Name" image={process.env.PUBLIC_URL + '/assets/img/img3.jpg'} customCss="align-items-center">
            </ImageOverlay>
            <Divider></Divider>
            
            <section id="productDetailSection" className="bg-main-pink-0 pb-5">
                <div className="row w-100 mx-0">
                    <div className="col-12 col-md-4 p-0">
                      Text
                    </div>
                    <div className="col-12 col-md-8 p-0">
                      <div className="text-center py-5" id="mainProductDescription">
                            <div className="fs-2 fw-bold py-5">Product Name</div>
                            <div className="fs-5 pb-5 px-5 mx-lg-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                      </div>
                      <Divider></Divider>
                      <GeneralContent 
                        title="Subtitle" 
                        description="lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan"
                        image="#" 
                        isLocateLeft={false}
                        ></GeneralContent>

                      <GeneralContent 
                        title="Subtitle1" 
                        description="lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan"
                        image="#" 
                        isLocateLeft={true}
                        ></GeneralContent>

                      <GeneralContent 
                        title="Subtitle2" 
                        description="lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan"
                        image="#" 
                        isLocateLeft={false}
                        ></GeneralContent>
                      <div></div>
                    </div>
                </div>

            </section>

            <Divider />

            <section id="productBenefitSection" className="bg-main-light-pink py-5">
              <div className="row d-flex justify-content-center col-12">
                <div className="col-12 col-md-4">
                    <div className="d-flex flex-column justify-content-between h-100 align-items-center">
                      <BenefitItem title="Benefit1" description="lorem" image="#"></BenefitItem>
                      <BenefitItem title="Benefit1" description="lorem" image="#"></BenefitItem>
                    </div>
                </div>
                <div className="fs-1 fw-bolder col-12 col-md-4 benefit-bg my-auto">BENEFITS</div>
                <div className="col-12 col-md-4">
                    <div className="d-flex flex-column justify-content-between h-100 align-items-center">
                      <BenefitItem title="Benefit1" description="lorem" image="#"></BenefitItem>
                      <BenefitItem title="Benefit1" description="lorem" image="#"></BenefitItem>
                    </div>
                </div>
              </div>
            </section>

            <section id="productIngredientSection">
              <IngredientList />
            </section>

            <section id="suitableForSection">
                <div className="row w-100 mx-0">
                  <div className="col-12 col-md-4 p-0 d-flex flex-column">
                    
                    <div className="p-5 pe-0">
                      <div className="fs-2 fs-md-1 ">
                        <span className="custom-border-suitable px-4 text-black">Suitable For</span>
                      </div>  
                    </div>
                    <div>Test</div>
                  </div>
                  <div className="col-12 col-md-8 px-5">
                    <NotePad title="First" description="Test" isAlignLeft={true}></NotePad>
                    <NotePad title="Second" description="Test" isAlignLeft={false}></NotePad>
                    <NotePad title="Third" description="Test" isAlignLeft={true}></NotePad>
                    <NotePad title="Forth" description="Test" isAlignLeft={false}></NotePad>
                  </div>
                </div>
              </section>
            <Divider/>

            <section id="directionAndCert">
              <DirectionCert></DirectionCert>
            </section>
        </div>
    );
  }
  
  export default Product;
  