function BenefitItem({image, title, description, customCss}:
    {
    image: string,
    title:string,
    description:string,
    customCss?: string
    }
) {
    return (
      <div className="py-5 d-flex flex-column justify-content-center my-5">
        <div className="text-black">
                <div className="text-center py-4 bg-main-darker rounded" style={{height:"150px"}}><img src={image} alt="Image" className="w-100 h-100 mx-1 " /></div>
                <div className="text-center fw-bold fs-3 py-3">{title}</div>
                <div className="text-center fs-5">{description}</div> 
        </div>
      </div>
    );
  }
  
  export default BenefitItem;