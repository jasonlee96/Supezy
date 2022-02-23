function TitleEllipse({customTextCss, title}) {
    return (
      <div className="bg-trans py-0 py-md-4 w-100" style={{height:"100px"}}>
          <div className={"spz-title text-center fw-bolder my-auto " + customTextCss}><span className="ellipse-title "><span className="ellipse-inner-text">{title}</span></span></div>
        </div>
    );
  }
  
  export default TitleEllipse;