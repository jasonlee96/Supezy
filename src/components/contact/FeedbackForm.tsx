import { ImageOverlay, Button } from "../common";

function FeedbackForm() {
    return (
      <div className="bg-main-pink-0 py-5" >
            <div className="container">
                <div className="col-12 col-md-8">
                    <div className="d-flex flex-column">
                        <div className="fs-1 fw-bolder py-4">Feedback Form</div>
                        <div className="fs-4 mx-5 px-5 text-sub-main py-4">No worries! it's anonymous</div>
                        <div className="py-5 d-flex flex-column w-75">
                            <label className="fs-4 text-black">Feedback :</label>
                            <textarea className="p-4 my-4 rounded-25" name="feedback" id="feedback" style={{height:"200px", resize:"none", borderWidth:"2px"}}></textarea>
                            <Button alignCss="justify-content-end" customCss="text-white bg-main-dark btn-hover-main w-50 py-4" href="#" text="Submit"/>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4"></div>
            </div>
            
        </div>
    );
  }
  
  export default FeedbackForm;