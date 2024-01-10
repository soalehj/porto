import "../View/contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_443ccwa", "template_f54mqqv", form.current, "0tF177fr6Og7fqT0w").then(alert("Terima kasih Sudah menghubungi kami"));
    e.target.reset();
  };

  return (
    <div className="Contact-Page">
      <div className="container">
        <div className="ContentPage">
          <div className="Header-Contact">
            <h2>
              Let’s talk <br />
              and create your <br />
              business awesome
            </h2>
            <div className="social-media-contact">
              <p>
                Follow us on social media
                <svg width="35" height="35" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37.9688 0H7.03125C3.148 0 0 3.21795 0 7.1875V38.8125C0 42.782 3.148 46 7.03125 46H37.9688C41.852 46 45 42.782 45 38.8125V7.1875C45 3.21795 41.852 0 37.9688 0Z" fill="#2867B2" />
                  <path
                    d="M16.3125 34.5H11.5312V19.1188H16.3125V34.5ZM13.9219 16.9625C12.375 16.9625 11.25 15.8125 11.25 14.2312C11.25 12.65 12.5156 11.5 13.9219 11.5C15.4688 11.5 16.5938 12.65 16.5938 14.2312C16.5938 15.8125 15.4688 16.9625 13.9219 16.9625ZM33.75 34.5H28.9688V26.1625C28.9688 23.7188 27.9844 23 26.5781 23C25.1719 23 23.7656 24.15 23.7656 26.3062V34.5H18.9844V19.1188H23.4844V21.275C23.9062 20.2688 25.5937 18.6875 27.9844 18.6875C30.6562 18.6875 33.4688 20.2687 33.4688 25.0125V34.5H33.75Z"
                    fill="white"
                  />
                </svg>
                <svg width="35" height="35" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M38.8125 0H7.1875C3.21795 0 0 3.21795 0 7.1875V38.8125C0 42.782 3.21795 46 7.1875 46H38.8125C42.782 46 46 42.782 46 38.8125V7.1875C46 3.21795 42.782 0 38.8125 0Z" fill="#231E1B" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.9648 11.7759C16.6346 11.7759 11.5 16.9104 11.5 23.2407C11.5 28.3049 14.8058 32.5954 19.3073 34.1429C19.87 34.2132 20.081 33.8615 20.081 33.5802C20.081 33.2988 20.081 32.5955 20.081 31.6107C16.9159 32.3141 16.2125 30.0633 16.2125 30.0633C15.7202 28.7269 14.9465 28.3753 14.9465 28.3753C13.8914 27.6719 15.0168 27.6719 15.0168 27.6719C16.1422 27.7422 16.7752 28.8676 16.7752 28.8676C17.8303 30.626 19.448 30.1337 20.081 29.8523C20.1514 29.0786 20.5031 28.5863 20.7844 28.3049C18.2523 28.0236 15.5795 27.0389 15.5795 22.6077C15.5795 21.3416 16.0015 20.3569 16.7752 19.5129C16.7049 19.3019 16.2829 18.1062 16.9159 16.5588C16.9159 16.5588 17.9006 16.2774 20.081 17.7545C20.9954 17.4731 21.9801 17.4028 22.9648 17.4028C23.9495 17.4028 24.9343 17.5435 25.8486 17.7545C28.0291 16.2774 29.0138 16.5588 29.0138 16.5588C29.6468 18.1062 29.2248 19.3019 29.1544 19.5832C29.8578 20.3569 30.3502 21.412 30.3502 22.678C30.3502 27.1092 27.6774 28.0236 25.1453 28.3049C25.5673 28.6566 25.919 29.36 25.919 30.415C25.919 31.9624 25.919 33.1581 25.919 33.5802C25.919 33.8615 26.13 34.2132 26.6927 34.1429C31.2645 32.5954 34.5 28.3049 34.5 23.2407C34.4297 16.9104 29.2951 11.7759 22.9648 11.7759Z"
                    fill="white"
                  />
                </svg>
              </p>
            </div>
          </div>
          <form className="form-contact" ref={form} onSubmit={sendEmail}>
            <div className="Inputan">
              <input className="Input" required="required" type="text" name="user_name" autoComplete="off" />
              <label className="UserLabel">Name</label>
            </div>
            <div className="Inputan">
              <input className="Input" required="required" type="email" name="user_email" autoComplete="off" />
              <label className="UserLabel">Email</label>
            </div>
            <div className="Inputan">
              <input className="Input" required="required" type="tel" name="user_phone" autoComplete="off" />
              <label className="UserLabel">Phone</label>
            </div>
            <div className="Inputan">
              <textarea className="Input" required="required" type="textarea" name="message" autoComplete="off" />
              <label className="UserLabel">Describe your issue</label>
            </div>
            <div className="Inputan">
              <input className="btn" type="submit" value="Send"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
