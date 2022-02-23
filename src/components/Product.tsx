import {TitleLine, TitleEllipse, Button, ImageOverlay, Divider, Image,BackgroundBase, Background} from './common';
import { GeneralContent, BenefitItem, IngredientList, NotePad, DirectionCert } from './products';
import { useTranslation, Trans } from 'react-i18next';
import {ProductViewModel, Benefit} from '../context/Model';
import {useState, useEffect} from 'react';
import { useGlobalState } from '../context/Context';
import { SlideIn, Shake, JiggleZoom } from "./animation";

function Product() {
  const { t, i18n } = useTranslation();
    let [product, setProduct] = useState<ProductViewModel>();
    let [left, setLeft] = useState<Array<Benefit>>([]);
    let [right, setRight] = useState<Array<Benefit>>([]);
    let {state, setState} = useGlobalState();
    useEffect(() => {
        initialData();
      }, []);
      useEffect(() => {
        initialData();
    }, [state.lang])
    const initialData = () => {
        setProduct(t("product", {returnObjects: true}));
    }
    
    useEffect(()=>{
      let benefitSize = Math.ceil((product?.benefit.items.length ?? 0) / 2);
      var leftBenefits = product?.benefit.items.splice(0, benefitSize) ?? [];
      var rightBenefits = product?.benefit.items.splice(-benefitSize) ?? [];
      setLeft(leftBenefits);
      setRight(rightBenefits);
    }, [product?.benefit]);
  // position: sticky / Parallax component
    return (
      <div className="min-vh-100 bg-main" style={{paddingTop:"11px"}}>
            <ImageOverlay title={product?.header ?? ""} image={process.env.PUBLIC_URL + '/assets/img/bg/banner.jpg'} customCss="align-items-center">
            </ImageOverlay>
            <Divider></Divider>
            
            <section id="productDetailSection" className="bg-main-pink-0 pb-5">
                <div className="row w-100 mx-0">
                    <div className="col-12 col-md-4 p-0 my-3">
                        
                        <div className="product-sticky mx-auto my-3">
                        <SlideIn isLeft={true}>
                          <Shake>
                        <BackgroundBase css="" color="#FEC5BB">
                          <Image image={process.env.PUBLIC_URL + '/assets/img/products/SDM_1.png'} css="w-100 h-100"></Image>
                          </BackgroundBase>
                          </Shake>
                          </SlideIn>
                        </div>
                        
                      
                    </div>
                    
                    <div className="col-12 col-md-8 p-0" style={{}}>
                      <Background
                        image={process.env.PUBLIC_URL + '/assets/img/bg/light-cherry-opa.png'}
                        imageStyle={{
                          backgroundSize:"700px",
                          backgroundPosition: "right bottom",
                          backgroundRepeat: "no-repeat"
                          
                        }}
                      >
                        <SlideIn>
                      <div className="text-center py-5" id="mainProductDescription">
                            <div className="spz-title fw-bold py-5">{product?.productName ?? ""}</div>
                            <div className="spz-description pb-5 px-5 mx-lg-5">
                            {product?.productDescription ?? ""}
                            </div>
                      </div>
                      </SlideIn>
                      <Divider></Divider>
                      {product?.productDetail.map((item, idx) =>
                      <SlideIn key={item.key}> 
                      <GeneralContent
                        key={item.key}
                        title={item.title}
                        image={process.env.PUBLIC_URL + item.image}
                        customImageStyle={item.imageStyle}
                        description={item.description}
                        isLocateLeft={(idx % 2 !== 0)}
                      ></GeneralContent></SlideIn>)}

                      </Background>
                    </div>
                </div>

            </section>

            <Divider />
            
            <section id="productBenefitSection" className="bg-main-light-pink py-5">
              <div className="row d-flex justify-content-center col-12">
                <div className="col-12 col-md-4 order-md-1 order-2">
                    <div className="d-flex flex-column justify-content-between h-100 align-items-center">
                      {left.map(item => 
                        <SlideIn isLeft={true} key={item.key}>
                          <BenefitItem title={item.title} description={item.description} key={item.key} image={process.env.PUBLIC_URL + item.image}></BenefitItem>
                          </SlideIn>
                        )}
                    </div>
                </div>
                <div className="fs-1 fw-bolder col-12 col-md-4 benefit-bg my-auto order-md-2 order-1 benefit-title">{product?.benefit.title}</div>
                <div className="col-12 col-md-4 order-3">
                    <div className="d-flex flex-column justify-content-between h-100 align-items-center">
                        {right.map(item => 
                        <SlideIn key={item.key}>
                          <BenefitItem title={item.title} description={item.description} key={item.key} image={process.env.PUBLIC_URL +item.image}></BenefitItem>
                          </SlideIn>
                        )}
                    </div>
                </div>
              </div>
            </section>

            <section id="productIngredientSection">
              <IngredientList header={product?.ingredientHeader ?? ""} ingredients={product?.ingredients ?? []} />
            </section>

            <section id="suitableForSection">
                <div className="row w-100 mx-0">
                  <div className="col-12 col-md-4 p-0 d-flex flex-column">
                    
                    <div className="p-5 pe-0">
                      <div className="fs-2 fs-md-1 ">
                        <span className="custom-border-suitable px-4 text-black">{product?.suitablePerson.title}</span>
                      </div>  
                    </div>
                    
                    <div className="product-sticky mx-auto my-3 overflow-hidden">
                    <SlideIn isLeft={true}>
                      <JiggleZoom>
                        <BackgroundBase bgClass="custom-bg-base-1" css="" color="#FEC5BB">
                          <Image image={process.env.PUBLIC_URL + '/assets/img/products/SDM_5.png'} css="w-100 h-100"></Image>
                          </BackgroundBase>
                          </JiggleZoom>
                          </SlideIn>
                      </div>
                      
                  </div>
                  <div className="col-12 col-md-8 px-5">
                    {product?.suitablePerson.items.map((item, idx) => 
                    <SlideIn key={item.key}>
                        <NotePad title={item.title} key={item.key} description={item.description} isAlignLeft={(idx % 2 === 0)}></NotePad>
                        </SlideIn>
                      )}
                  </div>
                </div>
              </section>
            <Divider/>

            <section id="directionAndCert">
              <DirectionCert direction={product?.direction} cert={product?.cert}></DirectionCert>
            </section>
        </div>
    );
  }
  
  export default Product;
  