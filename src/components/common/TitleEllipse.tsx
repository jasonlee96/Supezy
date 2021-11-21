function TitleEllipse({customTextCss, title}) {
    return (
      <div className="bg-trans py-4 w-100" style={{height:"125px"}}>
          <div className={"fs-1 text-center fw-bolder my-auto " + customTextCss}><span className="ellipse-title "><span className="ellipse-inner-text">{title}</span></span></div>
        </div>
    );
  }
  
  export default TitleEllipse;