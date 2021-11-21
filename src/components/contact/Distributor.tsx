import { ImageOverlay, Button } from "../common";

function Distributor({image, name, position, whatsapp, instagram}:{
    image: string,
    name: string,
    position: string,
    whatsapp?: string,
    instagram?: string
}) {
    return (
      <div className="col-12 col-md-6 col-lg-4 mt-4" >
            <div className="bg-main-pink-0 rounded-25 d-flex flex-row justify-content-center py-4">
                <div className="mx-4 my-auto bg-dark circle" style={{width: "85px", height: "85px", minWidth:"85px", backgroundImage: `url(${image})`}}>
                    
                </div>
                <div className="d-flex flex-column my-auto w-100">    
                    <div className="text-black pb-2">{name}</div>
                    <div className="font-size-14">{position}</div>
                </div>
                <div className="mx-2 flex-end bg-gray d-flex flex-column justify-content-center me-4">

                    {whatsapp && <div className="font-size-28" ><a href={"https://wa.me/" + whatsapp + "/"} style={{color:"#598971"}}><i className="fab fa-whatsapp"></i></a></div>}
                    {instagram && <div className="font-size-28" ><a href={"https://www.instagram.com/" + instagram+"/"} style={{color:"#598971"}}><i className="fab fa-instagram"></i></a></div>}
                </div>
            </div>  
        </div>
    );
  }
  
  export default Distributor;