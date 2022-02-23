import { ImageOverlay, Button, Background } from "../common";
import { Feedback } from '../../context/Model';

function FeedbackForm({feedback}:{
    feedback?: Feedback
}) {
    return (
        
            <div className="bg-main-pink-0 py-5" >
                <Background image={process.env.PUBLIC_URL + '/assets/img/bg/cherry.png'} css="" 
                imageStyle={{
                    backgroundSize:"300px 300px",
                    backgroundRepeat:"no-repeat",
                    backgroundPosition:"75% 80%"
                }}>
                <div className="container">
                    <div className="col-12 col-md-8">
                        <div className="d-flex flex-column">
                            <div className="fs-1 fw-bolder py-4">{feedback?.title ?? ""}</div>
                            <div className="fs-4 mx-5 px-5 text-sub-main py-4">{feedback?.description ?? ""}</div>
                            <div className="py-5 d-flex flex-column w-75">
                                <label className="fs-4 text-black">{feedback?.input ?? ""} :</label>
                                <textarea className="p-4 my-4 rounded-25" name="feedback" id="feedback" style={{height:"200px", resize:"none", borderWidth:"2px"}}></textarea>
                                <Button alignCss="justify-content-end" customCss="text-white bg-main-dark btn-hover-main w-50 py-4" href="#" text={feedback?.button ?? ""}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4"></div>
                </div>
                </Background>
            </div>
        
    );
  }
  
  export default FeedbackForm;