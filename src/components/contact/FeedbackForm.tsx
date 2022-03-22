import { ImageOverlay, Button, Background } from "../common";
import { Feedback , ContactBody} from '../../context/Model';
import { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Modal from 'react-modal';
import LoadingOverlay from 'react-loading-overlay';

Modal.setAppElement('#root');
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
function FeedbackForm({feedback, contact}:{
    feedback?: Feedback,
    contact?: ContactBody
}) {
    function SubmitFeedback(event){
        event.preventDefault();
        errorText.current?.classList?.add("d-none");
        if(value == null || value == undefined || value.trim() == ""){
            errorText.current?.classList?.remove("d-none");
            return;
        }
        setIsLoad(true);
          emailjs.send('service_42evivh', 'template_6nrykfw', {message: value, reply_to: "jasonleezhiyong@gmail.com"}, 'aeZ2kYYv8g21R_3TF')
          .then((result) => {
              setIsLoad(false);
              setIsOpen(true);
         setInterval(function(){
             setCount(prev => (parseInt(prev) - 1).toString());
         }, 1000)

         setTimeout(function(){
             window.location.reload();
         }, 5000)
          }, (error) => {
              console.log(error.text);
          });

    }
    const [value, setValue] = useState("");
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isLoad, setIsLoad] = useState(false);
    const [count, setCount] = useState("5");
    const errorText = useRef<HTMLInputElement>(null);
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    function openModal() {
        setIsOpen(true);
      }
    
      function closeModal() {
        setIsOpen(false);
      }

    return (
            <div className="bg-main-pink-0 py-5" >
                <Background image={process.env.PUBLIC_URL + '/assets/img/bg/cherry.png'} css="" 
                imageStyle={{
                    backgroundSize:"300px 300px",
                    backgroundRepeat:"no-repeat",
                    backgroundPosition:"75% 80%"
                }}>
                <div className="container p-0 row mx-auto">
                    <div className="col-12 col-lg-6">
                        <div className="d-flex flex-column">
                            <div className="fs-1 fw-bolder py-4">{feedback?.title ?? ""}</div>
                            <div className="fs-4 mx-md-5 px-2 px-md-5 text-sub-main py-4">{feedback?.description ?? ""}</div>
                            <div className="py-5 d-flex flex-column w-100 w-md-75">
                                <label className="fs-4 text-black">{feedback?.input ?? ""} :</label>
                                <textarea className="p-4 my-4 rounded-25" name="feedback" id="feedback" style={{height:"200px", resize:"none", borderWidth:"2px"}} value={value} onChange={handleChange}></textarea>
                                <div ref={errorText} className="px-4 text-danger d-none">{feedback?.validationMsg ?? ""}</div>
                                <div className="bg-trans py-4 d-flex justify-content-end">
                                    {/* <button onClick={SubmitFeedback} type="button" className="border-trans px-5 py-3 btn-rounded btn btn-lg btn-primary text-white bg-main-dark btn-hover-main col-4 py-4">{feedback?.button ?? ""}</button>
                                    <span className="col-2 text-center my-auto spz-description fw-bolder">OR</span> */}
                                    <button onClick={SubmitFeedback} type="button" className="col-lg-4 col-6 border-trans px-5 py-3 btn-rounded btn btn-lg btn-primary text-white bg-main-dark btn-hover-main col-4 py-4">{feedback?.button ?? ""}</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 card bg-trans p-0 border-0">
                        <div className="card-body ms-lg-5 mx-auto bg-main-dark shadow px-5" style={{borderRadius:"25px"}}>
                        <div className="d-flex flex-column text-white justify-content-center px-4 my-4 text-center">
                            <div className="spz-title fw-bolder">{contact?.header ?? ""}</div>
                            <div className="font-size-16 py-4">{contact?.description ?? ""}</div>
                            <div className="d-flex flex-column my-3">
                                <div className="spz-description"><i className="fa fa-envelope" aria-hidden="true"></i> <span className="px-3">{contact?.emailTitle ?? ""}</span></div>
                                <div className="spz-description py-3"><div className="bg-sub-main  shadow col-xl-8 col-lg-10 col-12 mx-auto" style={{borderRadius:"25px"}}><a className="btn w-100 text-white py-3" href={"mailto:" + (contact?.email ?? "")}>{contact?.email ?? ""}</a></div></div>
                            </div>
                            <div className="d-flex flex-column my-3">
                                <div className="spz-description"><i className="fab fa-whatsapp" aria-hidden="true"></i> <span className="px-3">{contact?.whatsappTitle ?? ""}</span></div>
                                <div className="spz-description py-3"><div className="bg-sub-main  shadow col-xl-8 col-lg-10 col-8 mx-auto" style={{borderRadius:"25px"}}><a className="btn w-100 py-3 text-white" href={"https://wa.me/"+ (contact?.whatsapp ?? "")+"/?text=Hi,%20I%20have%20queries%20regarding%20to%20SUPEZY%20product%2E"}>+60187849195</a></div></div>
                            </div>
                            <div className="d-flex flex-column my-3">
                                <div className="spz-description"><i className="fa fa-phone" aria-hidden="true"></i> <span className="px-3">{contact?.contactTitle ?? ""}</span></div>
                                <div className="spz-description py-3"><div className="bg-sub-main  shadow col-xl-8 col-lg-10 col-8 mx-auto" style={{borderRadius:"25px"}}><a className="btn w-100 py-3 text-white" href={"tel:"+ (contact?.contactno ?? "")}>{contact?.contactno ?? ""}</a></div></div>
                            </div>
                            <div></div>
                        </div>
                        </div>
                    </div>
                </div>
                </Background>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Email Status"
                >
                    <div>{feedback?.successMsg.replace("{second}", count) ?? ""}</div>
                </Modal>
                <div className={isLoad ? "d-flex justify-content-center align-items-center" : "d-none"} style={{position: "fixed", width: "100vw", height:"100vh", zIndex: 10000, left: 0, top: 0, background: "rgba(0,0,0,0.25)"}}>
                <div className="spinner-border mx-auto" style={{width: "75px", height: "75px"}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                </div> 
            </div>
        
    );
  }
  
  export default FeedbackForm;