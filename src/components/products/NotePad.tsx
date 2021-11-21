function NotePad({title, description, customCss, isAlignLeft = false}:
    {
    title:string,
    description:string,
    customCss?: string,
    isAlignLeft?: boolean
    }
) {
    return (
      <div className={"py-5 d-flex flex-column justify-content-center my-5 " + (isAlignLeft ? "align-items-start" : "align-items-end")}>
        <div className="p-5 text-black bg-white col-md-8 col-12" style={{maxWidth: "450px", maxHeight: "450px", minWidth: "300px", minHeight: "300px"}}>
            <div className="fw-bold fs-2 py-3">{title}</div>
            <div className="fs-4">{description}</div> 
        </div>
      </div>
    );
  }
  
  export default NotePad;