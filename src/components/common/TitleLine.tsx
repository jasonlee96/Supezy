function TitleLine({lineCss, customTextCss, title}) {
    return (
      <div className="bg-trans py-4 w-100 d-flex flex-row justify-content-center" style={{height:"125px"}}>
          <div className={"mx-5 w-33 thick-title-line my-auto " + lineCss}></div>
          <div className={"fs-1 w-25 text-center fw-bolder my-auto " + customTextCss}>{title}</div>
          <div className={"mx-5 w-33 thick-title-line my-auto " + lineCss}></div>
        </div>
    );
  }
  
  export default TitleLine;