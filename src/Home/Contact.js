const Contact = () => {
  return (
    <div className="section-contact" id="contact">
      <div className="content-contact">
        <div className="button-contact">
          <div className="contact-btn d-flex justify-content-center">
            <button className="btn-contact" href="#ContactPage">
              <div className="content-button">
                <span className="">Contact Me</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21.0703 2.92949L10.4063 13.5935M3.271 8.23517L19.8769 2.47394C20.8995 2.11915 21.8807 3.10028 21.5259 4.12291L15.7646 20.7288C15.37 21.8664 13.7725 21.8976 13.3337 20.7763L10.6968 14.0375C10.5651 13.701 10.2988 13.4347 9.96226 13.303L3.22354 10.6661C2.10219 10.2273 2.13338 8.62985 3.271 8.23517Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div className="border-btn"></div>
            </button>
          </div>
        </div>
        <div className="header-contact">
          <p>Contact</p>
          <h3>
            Let’s talk <br />
            and create your business <br />
            awesome
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
