import { useGlobalState } from "../../context/Context";


function TitlePage ({title, titleCss}:{
    title: string,
    titleCss?: string
}) {
    const { state, setState } = useGlobalState();
    return (
        <section  className="bg-image-green shadow">
                <div className="text-center mx-auto d-flex flex-column">
                    <h1 className={"px-4 py-5 text-white cn-sp-font letter-space " + titleCss}>{title}</h1>
                </div>
        </section>
      );
  }

export default TitlePage;