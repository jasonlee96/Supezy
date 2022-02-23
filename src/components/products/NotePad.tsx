import {Background} from "../common";
function NotePad({title, description, customCss, isAlignLeft = false}:
    {
    title:string,
    description:string,
    customCss?: string,
    isAlignLeft?: boolean
    }
) {
    return (
      <div className={"py-5 d-flex flex-column justify-content-center my-5 align-items-center  " + (isAlignLeft ? "align-items-md-start" : "align-items-md-end")}>
        <Background
          image={process.env.PUBLIC_URL + "/assets/img/bg/notepad.png"}
          css="col-md-5 col-12 note-pad"
          imageStyle={{
            backgroundSize:"cover",
            backgroundPosition: "right bottom",
            minHeight: "350px"
          }}
        >
          <div className="p-5 text-black col-md-8 col-12 w-100 h-100">
              <div className="fw-bold spz-title py-3">{title}</div>
              <div className="spz-description">{description}</div> 
          </div>
          <div style={{}} className="py-5 my-5"></div>
        </Background>
      </div>
    );
  }
  
  export default NotePad;