function DirectionCert() {
    return (
      <div className="">
        <div className="col-12 bg-main-pink row mx-0">
            <div className="col-12 col-lg-6 bg-main-pink p-5 order-1 order-lg-1">
                <div className="fw-bolder fs-1 text-center">Directions</div>
                <div className="px-3 py-4 font-size-16 fw-bold text-center text-black">Just require few steps to enjoy the products!</div>
            </div>
            <div className="col-12 col-lg-6 bg-main-pink-0 p-5 order-3 order-lg-1">
                <div className="fw-bolder fs-1 text-center">Certification</div>
                <div className=" px-3 text-center font-size-16 fw-bold py-4 text-sub-main">No worries, our product is safe!</div>
            </div>

            <div className="col-12 col-lg-4 bg-main-pink p-5 order-1 order-lg-1">
                <div className="ms-0 ps-0 ms-xxl-4 ps-xxl-5 text-center text-lg-start">
                    <div className="col-12 col-sm-10 col-md-7 col-lg-12 mx-auto">
                        <div className="fs-3 fw-bold">Method 1</div>
                        <div className="ms-5 text-black">
                            <ul className="py-3">
                                <li className="py-2 fs-5">step 1</li>
                                <li className="py-2 fs-5">step 2</li>
                                <li className="py-2 fs-5">step 3</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-7 col-lg-12 mx-auto">
                        <div className="fs-3 fw-bold">Method 2</div>
                        <div className="ms-5 text-black">
                            <ul className="py-3">
                                <li className="py-2 fs-5">step 1</li>
                                <li className="py-2 fs-5">step 2</li>
                                <li className="py-2 fs-5">step 3</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>

            <div className="col-12 col-lg-4 bg-cust-cert p-5 order-2 order-lg-2">
                <div className="" style={{height: "400px"}}>
                    <div className="col-12 h-100 bg-main-dark"></div>
                </div>
            </div>

            <div className="col-12 col-lg-4 bg-main-pink-0 p-5 order-3 order-lg-3">
                <div className=" text-center text-lg-start">
                    <div className="col-12 col-sm-10 col-md-7 col-lg-12 mx-auto fw-bold mb-4 border-cust-cert">
                        <div className="fs-4 py-2">Cert 1</div>
                        <div className="fs-5 px-2 text-sub-main ">Cert Title</div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-7 col-lg-12 mx-auto fw-bold mb-4 border-cust-cert">
                        <div className="fs-4 py-2">Cert 2</div>
                        <div className="fs-5 px-2 text-sub-main ">Cert Title</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default DirectionCert;