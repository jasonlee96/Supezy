import { ImageOverlay, Button } from "../common";
import { AboutUsNewViewModel} from "../../context/Model";
function News({news}:{
    news?: Array<AboutUsNewViewModel>
}) {
    if(news != null && news.length > 0){
    return (
      <div className="py-4 w-100">
         <div className="bg-main-pink-0 py-5 text-center w-100 d-flex flex-column text-main">
                <div className="fs-1 fw-bolder py-4">Our News</div>
                <div className="fs-4 py-4 w-50 mx-auto text-sub-main">View our news to know more about Superzy!</div>
                <div className="py-5"></div>
            </div>

            <div className="py-5">
            <ImageOverlay title="Title" image={process.env.PUBLIC_URL + '/assets/img/img3.jpg'} customCss="">
                <div className="text-black">description</div>
            </ImageOverlay>
            <ImageOverlay title="Title" image={process.env.PUBLIC_URL + '/assets/img/img3.jpg'} customCss="">
                <div className="text-black">description</div>
            </ImageOverlay>
            </div>

            <div className="py-5">
                <Button alignCss ="justify-content-center" customCss="text-white bg-main-dark btn-hover-main w-50 py-4" href="#" text="View More..."/>
            </div>
        </div>
    );
    }
    else{
        return (<></>);
    }
  }
  
  export default News;