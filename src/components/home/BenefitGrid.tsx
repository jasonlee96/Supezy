function BenefitGrid({title, description, icon, children}:{
    title: string,
    description: string,
    icon?: string,
    children: React.ReactNode
}) {
    const isFAIcon = icon != null
    return (
      <div className="d-flex flex-row py-4">
          <div className="px-4 d-flex justify-content-center">
              {isFAIcon ? <div className="my-auto" style={{width:"50px", height:"50px"}}><i className={"w-100 h-100 " +icon}></i></div> : children}
          </div>
          <div className="d-flex justify-content-center align-items-center">
              <div className="fw-bolder spz-description text-main">{title}</div>
              <div className="pt-2 text-sub-main">{description}</div>   
          </div>
      </div>
    );
  }
  
  export default BenefitGrid;