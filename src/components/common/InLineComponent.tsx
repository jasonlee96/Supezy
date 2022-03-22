import { useGlobalState } from "../../context/Context";


function InLineComponent ({children, color, subtitle, title, titleCss}:{
    children: React.ReactNode,
    color: string,
    subtitle?: string,
    title: string,
    titleCss?: string
}) {
    const { state, setState } = useGlobalState();
    return (
        <section className="py-4" style={{backgroundColor: color}}>
            <div className="text-center mx-auto d-flex flex-column">
                <div className={"spz-title fw-bolder py-5 " + (titleCss ?? "")}>{title}</div>
                {subtitle != null ? <div className="spz-description pb-5 " style={{fontStyle: "italic"}}>{subtitle}</div> : <></>}
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-around pb-5">
                {children}
            </div>
        </section>
      );
  }

export default InLineComponent;