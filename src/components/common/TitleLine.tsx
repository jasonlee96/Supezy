function TitleLine({lineCss, customTextCss, title}) {
    return (
      <div className="bg-trans py-4 w-100 d-flex flex-row justify-content-center" style={{height:"125px"}}>
          <div className={"mx-5 w-25 thick-title-line my-auto " + lineCss}></div>
          <div className={"spz-title w-33 text-center fw-bolder my-auto " + customTextCss}>{title}</div>
          <div className={"mx-5 w-25 thick-title-line my-auto " + lineCss}></div>
        </div>
    );
  }
  
  export default TitleLine;