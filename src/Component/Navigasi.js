import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navigasi() {
  const handleClick = () => {
    window.location.href = "https://drive.google.com/file/d/1yf0oTJKrONrefqodgC7Jh-V1y0Ca6fhw/view?usp=sharing";
  };

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3" sticky="top">
          <Container>
            <Navbar.Brand href="/">
              <svg className="BrandLogo" width="59" height="69" viewBox="0 0 59 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M35.4688 35H28.7656V11C28.7656 10.5312 28.6719 10.0937 28.4844 9.6875C28.3125 9.28125 28.0703 8.92969 27.7578 8.63281C27.4609 8.32031 27.1094 8.07812 26.7031 7.90625C26.2969 7.73438 25.8594 7.64844 25.3906 7.64844C24.9219 7.64844 24.4844 7.73438 24.0781 7.90625C23.6719 8.07812 23.3125 8.32031 23 8.63281C22.7031 8.92969 22.4688 9.28125 22.2969 9.6875C22.125 10.0937 22.0391 10.5312 22.0391 11V35H15.3125V11C15.3125 10.5312 15.2266 10.0937 15.0547 9.6875C14.8828 9.28125 14.6406 8.92969 14.3281 8.63281C14.0312 8.32031 13.6797 8.07812 13.2734 7.90625C12.8672 7.73438 12.4297 7.64844 11.9609 7.64844C11.4922 7.64844 11.0547 7.73438 10.6484 7.90625C10.2422 8.07812 9.88281 8.32031 9.57031 8.63281C9.27344 8.92969 9.03906 9.28125 8.86719 9.6875C8.69531 10.0937 8.60938 10.5312 8.60938 11V35H1.88281V11C1.88281 9.60938 2.14062 8.30469 2.65625 7.08594C3.1875 5.85156 3.90625 4.78125 4.8125 3.875C5.73438 2.95313 6.80469 2.23438 8.02344 1.71875C9.25781 1.1875 10.5703 0.921875 11.9609 0.921875C13.2109 0.921875 14.4141 1.14844 15.5703 1.60156C16.7266 2.03906 17.7656 2.67969 18.6875 3.52344C19.6094 2.67969 20.6406 2.03906 21.7812 1.60156C22.9375 1.14844 24.1406 0.921875 25.3906 0.921875C26.7812 0.921875 28.0859 1.1875 29.3047 1.71875C30.5391 2.23438 31.6094 2.95313 32.5156 3.875C33.4375 4.78125 34.1562 5.85156 34.6719 7.08594C35.2031 8.30469 35.4688 9.60938 35.4688 11V35ZM48.6875 32.6094C48.6875 33.1719 48.5859 33.7031 48.3828 34.2031C48.1797 34.6875 47.8984 35.1094 47.5391 35.4688C47.1797 35.8281 46.7578 36.1094 46.2734 36.3125C45.7891 36.5312 45.2656 36.6406 44.7031 36.6406C44.1562 36.6406 43.6328 36.5312 43.1328 36.3125C42.6484 36.1094 42.2188 35.8281 41.8438 35.4688C41.4844 35.1094 41.1953 34.6875 40.9766 34.2031C40.7734 33.7031 40.6719 33.1719 40.6719 32.6094C40.6719 32.0625 40.7734 31.5469 40.9766 31.0625C41.1953 30.5781 41.4844 30.1562 41.8438 29.7969C42.2188 29.4375 42.6484 29.1562 43.1328 28.9531C43.6328 28.7344 44.1562 28.625 44.7031 28.625C45.2656 28.625 45.7891 28.7344 46.2734 28.9531C46.7578 29.1562 47.1797 29.4375 47.5391 29.7969C47.8984 30.1562 48.1797 30.5781 48.3828 31.0625C48.5859 31.5469 48.6875 32.0625 48.6875 32.6094ZM0.148438 43.4688C0.148438 42.0781 0.414062 40.7734 0.945312 39.5547C1.47656 38.3359 2.19531 37.2734 3.10156 36.3672C4.02344 35.4453 5.09375 34.7188 6.3125 34.1875C7.53125 33.6562 8.83594 33.3906 10.2266 33.3906H25.6484V40.1172H10.2266C9.75781 40.1172 9.32031 40.2031 8.91406 40.375C8.50781 40.5469 8.14844 40.7891 7.83594 41.1016C7.53906 41.3984 7.30469 41.75 7.13281 42.1562C6.96094 42.5625 6.875 43 6.875 43.4688C6.875 43.9375 6.96094 44.3828 7.13281 44.8047C7.30469 45.2109 7.53906 45.5703 7.83594 45.8828C8.14844 46.1797 8.50781 46.4141 8.91406 46.5859C9.32031 46.7578 9.75781 46.8438 10.2266 46.8438H16.9531C18.3438 46.8438 19.6484 47.1094 20.8672 47.6406C22.1016 48.1562 23.1719 48.875 24.0781 49.7969C25 50.7031 25.7188 51.7734 26.2344 53.0078C26.7656 54.2266 27.0312 55.5312 27.0312 56.9219C27.0312 58.3125 26.7656 59.6172 26.2344 60.8359C25.7188 62.0547 25 63.125 24.0781 64.0469C23.1719 64.9531 22.1016 65.6719 20.8672 66.2031C19.6484 66.7344 18.3438 67 16.9531 67H2.02344V60.2734H16.9531C17.4219 60.2734 17.8594 60.1875 18.2656 60.0156C18.6719 59.8438 19.0234 59.6094 19.3203 59.3125C19.6328 59 19.875 58.6406 20.0469 58.2344C20.2188 57.8281 20.3047 57.3906 20.3047 56.9219C20.3047 56.4531 20.2188 56.0156 20.0469 55.6094C19.875 55.2031 19.6328 54.8516 19.3203 54.5547C19.0234 54.2422 18.6719 54 18.2656 53.8281C17.8594 53.6562 17.4219 53.5703 16.9531 53.5703H10.2266C8.83594 53.5703 7.53125 53.3047 6.3125 52.7734C5.09375 52.2422 4.02344 51.5234 3.10156 50.6172C2.19531 49.6953 1.47656 48.625 0.945312 47.4062C0.414062 46.1719 0.148438 44.8594 0.148438 43.4688ZM38.6562 64.6094C38.6562 65.1719 38.5547 65.7031 38.3516 66.2031C38.1484 66.6875 37.8672 67.1094 37.5078 67.4688C37.1484 67.8281 36.7266 68.1094 36.2422 68.3125C35.7578 68.5312 35.2344 68.6406 34.6719 68.6406C34.125 68.6406 33.6016 68.5312 33.1016 68.3125C32.6172 68.1094 32.1875 67.8281 31.8125 67.4688C31.4531 67.1094 31.1641 66.6875 30.9453 66.2031C30.7422 65.7031 30.6406 65.1719 30.6406 64.6094C30.6406 64.0625 30.7422 63.5469 30.9453 63.0625C31.1641 62.5781 31.4531 62.1562 31.8125 61.7969C32.1875 61.4375 32.6172 61.1562 33.1016 60.9531C33.6016 60.7344 34.125 60.625 34.6719 60.625C35.2344 60.625 35.7578 60.7344 36.2422 60.9531C36.7266 61.1562 37.1484 61.4375 37.5078 61.7969C37.8672 62.1562 38.1484 62.5781 38.3516 63.0625C38.5547 63.5469 38.6562 64.0625 38.6562 64.6094ZM58.2734 53.5703C58.2734 55.4297 57.9219 57.1797 57.2188 58.8203C56.5156 60.4453 55.5547 61.8672 54.3359 63.0859C53.1328 64.2891 51.7109 65.2422 50.0703 65.9453C48.4453 66.6484 46.7031 67 44.8438 67C43.7188 67 42.5938 66.8594 41.4688 66.5781V59.3594C41.9688 59.6562 42.5078 59.8828 43.0859 60.0391C43.6641 60.1953 44.25 60.2734 44.8438 60.2734C45.7656 60.2734 46.6328 60.1016 47.4453 59.7578C48.2734 59.3984 48.9922 58.9141 49.6016 58.3047C50.2109 57.6953 50.6875 56.9844 51.0312 56.1719C51.3906 55.3594 51.5703 54.4922 51.5703 53.5703V33.3906H58.2734V53.5703Z"
                  fill="#598392"
                />
              </svg>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} href="/">
                  <svg className="BrandLogo" width="59" height="69" viewBox="0 0 59 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M35.4688 35H28.7656V11C28.7656 10.5312 28.6719 10.0937 28.4844 9.6875C28.3125 9.28125 28.0703 8.92969 27.7578 8.63281C27.4609 8.32031 27.1094 8.07812 26.7031 7.90625C26.2969 7.73438 25.8594 7.64844 25.3906 7.64844C24.9219 7.64844 24.4844 7.73438 24.0781 7.90625C23.6719 8.07812 23.3125 8.32031 23 8.63281C22.7031 8.92969 22.4688 9.28125 22.2969 9.6875C22.125 10.0937 22.0391 10.5312 22.0391 11V35H15.3125V11C15.3125 10.5312 15.2266 10.0937 15.0547 9.6875C14.8828 9.28125 14.6406 8.92969 14.3281 8.63281C14.0312 8.32031 13.6797 8.07812 13.2734 7.90625C12.8672 7.73438 12.4297 7.64844 11.9609 7.64844C11.4922 7.64844 11.0547 7.73438 10.6484 7.90625C10.2422 8.07812 9.88281 8.32031 9.57031 8.63281C9.27344 8.92969 9.03906 9.28125 8.86719 9.6875C8.69531 10.0937 8.60938 10.5312 8.60938 11V35H1.88281V11C1.88281 9.60938 2.14062 8.30469 2.65625 7.08594C3.1875 5.85156 3.90625 4.78125 4.8125 3.875C5.73438 2.95313 6.80469 2.23438 8.02344 1.71875C9.25781 1.1875 10.5703 0.921875 11.9609 0.921875C13.2109 0.921875 14.4141 1.14844 15.5703 1.60156C16.7266 2.03906 17.7656 2.67969 18.6875 3.52344C19.6094 2.67969 20.6406 2.03906 21.7812 1.60156C22.9375 1.14844 24.1406 0.921875 25.3906 0.921875C26.7812 0.921875 28.0859 1.1875 29.3047 1.71875C30.5391 2.23438 31.6094 2.95313 32.5156 3.875C33.4375 4.78125 34.1562 5.85156 34.6719 7.08594C35.2031 8.30469 35.4688 9.60938 35.4688 11V35ZM48.6875 32.6094C48.6875 33.1719 48.5859 33.7031 48.3828 34.2031C48.1797 34.6875 47.8984 35.1094 47.5391 35.4688C47.1797 35.8281 46.7578 36.1094 46.2734 36.3125C45.7891 36.5312 45.2656 36.6406 44.7031 36.6406C44.1562 36.6406 43.6328 36.5312 43.1328 36.3125C42.6484 36.1094 42.2188 35.8281 41.8438 35.4688C41.4844 35.1094 41.1953 34.6875 40.9766 34.2031C40.7734 33.7031 40.6719 33.1719 40.6719 32.6094C40.6719 32.0625 40.7734 31.5469 40.9766 31.0625C41.1953 30.5781 41.4844 30.1562 41.8438 29.7969C42.2188 29.4375 42.6484 29.1562 43.1328 28.9531C43.6328 28.7344 44.1562 28.625 44.7031 28.625C45.2656 28.625 45.7891 28.7344 46.2734 28.9531C46.7578 29.1562 47.1797 29.4375 47.5391 29.7969C47.8984 30.1562 48.1797 30.5781 48.3828 31.0625C48.5859 31.5469 48.6875 32.0625 48.6875 32.6094ZM0.148438 43.4688C0.148438 42.0781 0.414062 40.7734 0.945312 39.5547C1.47656 38.3359 2.19531 37.2734 3.10156 36.3672C4.02344 35.4453 5.09375 34.7188 6.3125 34.1875C7.53125 33.6562 8.83594 33.3906 10.2266 33.3906H25.6484V40.1172H10.2266C9.75781 40.1172 9.32031 40.2031 8.91406 40.375C8.50781 40.5469 8.14844 40.7891 7.83594 41.1016C7.53906 41.3984 7.30469 41.75 7.13281 42.1562C6.96094 42.5625 6.875 43 6.875 43.4688C6.875 43.9375 6.96094 44.3828 7.13281 44.8047C7.30469 45.2109 7.53906 45.5703 7.83594 45.8828C8.14844 46.1797 8.50781 46.4141 8.91406 46.5859C9.32031 46.7578 9.75781 46.8438 10.2266 46.8438H16.9531C18.3438 46.8438 19.6484 47.1094 20.8672 47.6406C22.1016 48.1562 23.1719 48.875 24.0781 49.7969C25 50.7031 25.7188 51.7734 26.2344 53.0078C26.7656 54.2266 27.0312 55.5312 27.0312 56.9219C27.0312 58.3125 26.7656 59.6172 26.2344 60.8359C25.7188 62.0547 25 63.125 24.0781 64.0469C23.1719 64.9531 22.1016 65.6719 20.8672 66.2031C19.6484 66.7344 18.3438 67 16.9531 67H2.02344V60.2734H16.9531C17.4219 60.2734 17.8594 60.1875 18.2656 60.0156C18.6719 59.8438 19.0234 59.6094 19.3203 59.3125C19.6328 59 19.875 58.6406 20.0469 58.2344C20.2188 57.8281 20.3047 57.3906 20.3047 56.9219C20.3047 56.4531 20.2188 56.0156 20.0469 55.6094C19.875 55.2031 19.6328 54.8516 19.3203 54.5547C19.0234 54.2422 18.6719 54 18.2656 53.8281C17.8594 53.6562 17.4219 53.5703 16.9531 53.5703H10.2266C8.83594 53.5703 7.53125 53.3047 6.3125 52.7734C5.09375 52.2422 4.02344 51.5234 3.10156 50.6172C2.19531 49.6953 1.47656 48.625 0.945312 47.4062C0.414062 46.1719 0.148438 44.8594 0.148438 43.4688ZM38.6562 64.6094C38.6562 65.1719 38.5547 65.7031 38.3516 66.2031C38.1484 66.6875 37.8672 67.1094 37.5078 67.4688C37.1484 67.8281 36.7266 68.1094 36.2422 68.3125C35.7578 68.5312 35.2344 68.6406 34.6719 68.6406C34.125 68.6406 33.6016 68.5312 33.1016 68.3125C32.6172 68.1094 32.1875 67.8281 31.8125 67.4688C31.4531 67.1094 31.1641 66.6875 30.9453 66.2031C30.7422 65.7031 30.6406 65.1719 30.6406 64.6094C30.6406 64.0625 30.7422 63.5469 30.9453 63.0625C31.1641 62.5781 31.4531 62.1562 31.8125 61.7969C32.1875 61.4375 32.6172 61.1562 33.1016 60.9531C33.6016 60.7344 34.125 60.625 34.6719 60.625C35.2344 60.625 35.7578 60.7344 36.2422 60.9531C36.7266 61.1562 37.1484 61.4375 37.5078 61.7969C37.8672 62.1562 38.1484 62.5781 38.3516 63.0625C38.5547 63.5469 38.6562 64.0625 38.6562 64.6094ZM58.2734 53.5703C58.2734 55.4297 57.9219 57.1797 57.2188 58.8203C56.5156 60.4453 55.5547 61.8672 54.3359 63.0859C53.1328 64.2891 51.7109 65.2422 50.0703 65.9453C48.4453 66.6484 46.7031 67 44.8438 67C43.7188 67 42.5938 66.8594 41.4688 66.5781V59.3594C41.9688 59.6562 42.5078 59.8828 43.0859 60.0391C43.6641 60.1953 44.25 60.2734 44.8438 60.2734C45.7656 60.2734 46.6328 60.1016 47.4453 59.7578C48.2734 59.3984 48.9922 58.9141 49.6016 58.3047C50.2109 57.6953 50.6875 56.9844 51.0312 56.1719C51.3906 55.3594 51.5703 54.4922 51.5703 53.5703V33.3906H58.2734V53.5703Z"
                      fill="#598392"
                    />
                  </svg>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="MenuList mx-auto">
                  <li>
                    <NavLink className="ListItem" to="/About">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="ListItem" to="/Showcase">
                      Showcase
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="ListItem" to="/Service">
                      Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="ListItem" to="/Article">
                      Articel
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="ListItem" to="/Contact">
                      Contact
                    </NavLink>
                  </li>
                </Nav>
                <button className="btn-download" onClick={handleClick}>
                  <div className="content-button">
                    <span>Download CV</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.62856 16.1012H4.5551C2.60745 16.1012 1.02856 14.7728 1.02856 12.8252C1.02856 10.8775 2.60745 9.29867 4.5551 9.29867C4.68754 9.29867 4.81828 9.30597 4.94693 9.32019V9.29867H4.99544C4.96342 9.04194 4.94693 8.78039 4.94693 8.51499C4.94693 5.05251 7.75383 2.24561 11.2163 2.24561C13.561 2.24561 15.6051 3.53274 16.6805 5.43898C16.9433 5.40032 17.2122 5.3803 17.4857 5.3803C20.5154 5.3803 22.9714 7.83634 22.9714 10.866C22.9714 13.6296 20.9278 15.6653 18.2694 16.0456H15.4286M11.6082 9.6905V21.7543M11.6082 21.7543L8.82856 19.0456M11.6082 21.7543L14.3143 19.0456"
                        stroke="none"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="border-btn"></div>
                </button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navigasi;