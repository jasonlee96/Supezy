function Footer() {
  return (
    <footer className="footer py-4 bg-footer upper-shadow">
            <div className="container">
                <div className="row align-items-center pt-3 pb-5">
                    <div className="text-center">Follow us on...</div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-4 text-center">Copyright &copy; Superzy 2021</div>
                    <div className="col-lg-4 my-3 my-lg-0 d-flex justify-content-center">
                        <a className="btn bg-main btn-social mx-2 circle" href="https://github.com/jasonlee96"><i className="fab fa-facebook-square text-main fs-4"></i></a>
                        <a className="btn bg-main btn-social mx-2 circle" href="https://www.linkedin.com/in/jasonleezhiyong/"><i className="fab fa-instagram text-main fs-4"></i></a>
                    </div>
                    <div className="col-lg-4 text-center">
                        <a className="link-dark text-decoration-none me-3" href="mailto:hello@superzy.com">hello@superzy.com</a>
                    </div>
                </div>
            </div>
        </footer>
  );
}

export default Footer;
