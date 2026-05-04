import { Link } from "react-router-dom"

const Addfooter =() => {
return(
  <>
      {/* Footer Section */}
      <section className="row p-3  m-0 "  style={{backgroundColor: "#1F1F1F",color:"#39FF14"}} >
        
        {/* Child 1 */}
        <div className="col-md-3">
          <h2 className="text-center " style={{color:"#39FF14"}}>~Zuri Gaming~</h2>
          <p className="" style={{color:"#39FF14"}}>
            Welcome to Zuri Gaming — Where Legends Begin.Power Up Your Play.Plug In. Power Up. Zuri Gaming
          </p>
        </div>

        {/* Child 2 */}
        <div className="col-md-3">
          <h2 className="text-center ">~Contact us~</h2>
          <p>📍 Kenya</p>
          <p>📞 +254 700 000 000</p>
          <p>✉️ info@gaming.com</p>
        </div>

        {/* Child 3 */}
        <div className="col-md-3">
          <h2 className="text-center ">~Navigate~</h2>
          <ul className="list-unstyled">
            <li>
               <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Get products</Link>
               
               
            </li>
            <li>
              <Link to="/addproduct" style={{ textDecoration: "none", color: "inherit" }}>Addproduct</Link>
            </li>
            <li>
              <Link to="/signup" style={{ textDecoration: "none", color: "inherit" }}>Sign Up</Link>
            </li>
            <li>
              <Link to="/signin" style={{ textDecoration: "none", color: "inherit" }}>Sign In</Link>
            </li>
          </ul>
        </div>

        {/* Child 4 */}
        <div className="col-md-3">
          <h2 className="text-center ">~Stay Connected~</h2>

          <a href="#">
            <img src="images/download.png" alt="Facebook" width="48" className="bg-success rounded me-2" />
          </a>

          <a href="#">
            <img src="images/Instagram_Glyph_Black.png" alt="Instagram" width="48" className="me-2" />
          </a>

          <a href="#">
            <img src="images/x.png" alt="X" width="48" />
          </a>

          <p className="mt-2">
            Follow us on our social media handles so that you don't miss out on our new offers and promotions.
          </p>
        </div>

      </section>

      {/* Bottom Footer */}
      <footer className=" p-4 text-center" style={{backgroundColor: "#00FF7F"}}>
        <b className="text-light">Zuri Conected &copy; 2026</b>
      </footer>
    </>
)
}
export default Addfooter