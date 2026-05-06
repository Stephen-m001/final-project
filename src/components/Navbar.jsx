import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Navbar = () => {
  const [username, setUsername] = useState("")
  const navigate = useNavigate()

  // load login state
  useEffect(() => {
    const user = localStorage.getItem("username")
    if (user) {
      setUsername(user)
    }
  }, [])

  // logout function
  const handleLogout = () => {
    localStorage.removeItem("username")
    localStorage.removeItem("user")
    setUsername("")
    navigate("/signin")
  }

  return (
    <section className="row">
      <div className="col-md-12">

        <nav
          className="navbar navbar-expand-md"
          style={{ backgroundColor: "#00FF7F" }}
        >
          {/* Brand */}
          <Link to="/" className="navbar-brand text-dark">
            Zuri Gaming
          </Link>

          <button
            className="navbar-toggler"
            data-bs-target="#navbarcollapse"
            data-bs-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarcollapse">

            <div className="navbar-nav me-auto">

              {/* Home */}
              <Link to="/" className="nav-link">Home</Link>

              {/* 🚫 only show if logged in */}
              {username && (
                <Link to="/addproduct" className="nav-link">
                  Add Product
                </Link>
              )}

              {/* If NOT logged in */}
              {!username && (
                <>
                  <Link to="/signup" className="nav-link">Sign Up</Link>
                  <Link to="/signin" className="nav-link">Sign In</Link>
                </>
              )}

            </div>

            {/* 👤 LOGIN STATUS AREA */}
            <div className="d-flex align-items-center gap-2">

              {username ? (
                <>
                  <span className="text-dark fw-bold">
                    Logged in as: {username}
                  </span>

                  <button
                    onClick={handleLogout}
                    className="btn btn-danger btn-sm"
                  >
                    Logout
                  </button>
                </>
              ) : null}

            </div>

          </div>
        </nav>

      </div>
    </section>
  )
}

export default Navbar
