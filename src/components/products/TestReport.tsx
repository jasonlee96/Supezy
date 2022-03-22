import {Image} from "../common";
import {useRef} from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {TestReports} from "../../context/Model";
import "../style/report.css";
function TestReport({report}:
    {
    report?: TestReports
    }
) {
    const splideRef = useRef<null | Splide>(null);
    return (
        <div className="pt-5 d-flex flex-column justify-content-center bg-main-dark">
        <div className="p-0 p-md-5 mx-5 pb-0 pb-md-0">
            <div className="text-white fs-1 fw-bolder text-uppercase">{report?.header ?? ""}</div>
        </div>
        <div className="py-2 pb-5">
          <Splide
          className="py-3 report-splide"
          options={{
              type   : 'loop',
              autoplay: true,
              drag   : 'free',
              focus  : 'center',
              perPage: 1,
              pagination: false,
              breakpoints: {
                1280: {
                    perPage: 1,
                }
            },
              updateOnMove:true
          }}
          ref={ splideRef }
          >
              {
                 report?.images.map((item) => <SplideSlide className="report-slide mx-1 mx-lg-3"><Image css="w-100 h-100 report-item" image={process.env.PUBLIC_URL + item.url} key={item.key} imageStyle={{zIndex: 100}}/></SplideSlide>)
              }
          </Splide>
      </div>
    </div>
    );
  }
  
  export default TestReport;