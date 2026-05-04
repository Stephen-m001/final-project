import React from 'react'

const Navbar = () => {
  return (
        <section class="row">
            <div class="col-md-12">
                {/* <!-- a nav with the navbar content  --> */}
                <nav class="navbar navbar-expand-md  "style={{backgroundColor: "#00FF7F"}}>
                    <a href="" class="navbar-brand text-dark" style={{}}>Zuri Gaming</a>
                    <button class="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- a division containing the links  --> */}
                    <div class="collapse navbar-collapse" id="navbarcollapse">
                        <div class="navbar-nav">
                            <a href="/" class="nav-link ">Home</a>
                            <a href="/addproduct" class="nav-link ">Add Product</a>
                            <a href="/signup" class="nav-link ">Sign Up</a>
                            <a href="/signin" class="nav-link ">Sign In </a>

                        </div>
                    </div>
                </nav>
            </div>
        </section>
  )
}

export default Navbar