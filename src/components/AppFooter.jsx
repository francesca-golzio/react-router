

function AppFooter() {


  return (
    <>
      <footer>

        <div className="top_footer">
          <div className="container d-flex">

            <div>

              <ul className="list-unstyled">
                <li><h5>About</h5></li>
                <li>Our crew</li>
                <li>Our values</li>
              </ul>

              <ul className="list-unstyled">
                <li>
                Mermaid Lagoon, <br />
                  {/* <span>🏴‍☠️ </span> */} <img src="public/flag.png" alt="country flag" height="15px"/> Neverland
                </li>
              </ul>

            </div>

            <ul className="list-unstyled">
              <li><h5>Orders</h5></li>
              <li>Shipping</li>
              <li>Payment metods<br />
                <div className="d-flex justify-content-between flex-wrap">
                  <div className="col-3"><i className="bi bi-paypal"></i></div>
                  <div className="col-3"><i className="bi bi-credit-card-fill"></i></div>
                  <div className="col-3"><i className="bi bi-cash"></i></div>
                </div>
                <div className="fst-italic text-end">
                  <small>COD fee + 3.99 $</small>
                </div>
              </li>
            </ul>

            <ul className="list-unstyled">
              <li><h5>Support</h5></li>
              <li><i className="bi bi-chat-dots"></i> Ask Ariel</li>
              <li>
                <div className="ai_chat">-coming soon-</div>
              </li>
            </ul>

            <ul className="list-unstyled">
              <li><h5>Keep in touch</h5></li>
              <li>
                <div className="d-flex justify-content-start flex-wrap">
                  <div className="col-3"><i className="bi bi-instagram"></i></div>
                  <div className="col-3"><i className="bi bi-facebook"></i></div>
                  <div className="col-3"><i className="bi bi-pinterest"></i></div>
                  <div className="col-3"><i className="bi bi-twitter-x"></i></div>
                  <div className="col-3"><i className="bi bi-whatsapp"></i></div>
                  <div className="col-3"><i className="bi bi-telegram"></i></div>
                  <div className="col-3"><i className="bi bi-linkedin"></i></div>
                </div>
              </li>
            </ul>

            <ul className="list-unstyled app">
              <li><h5>Our app</h5></li>
              <li><img src="/public/apple_app.png" alt="get app on Apple Store" height="35px" /></li>
              <li><img src="/public/google_app.png" alt="get app on Google Play" height="35px" /></li>
            </ul>

          </div>
        </div>

        <div className="bottom_footer">
          <div className="container d-flex justify-content-between">

            <ul className="list-unstyled d-flex">
              <li><a href="">Privacy</a></li>
              <li><a href="">Terms of service</a></li>
              <li><a href="">Careers</a></li>
            </ul>

            <ul className="list-unstyled d-flex justify-content-between align-items-center">
              <li>~ <i className="bi bi-c-circle"></i> Mermaid Sis (2026) - all rights reserved ~</li>
            </ul>

          </div>
        </div>


      </footer >

    </>
  )
}

export default AppFooter
