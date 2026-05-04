import React from 'react'
const Carousel = () => {
  return (
    <section className="row">
  <div className="col-md-12">
    {/* Carousel */}
    <div
      id="mycarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src="images/gc1.png"
            alt="slide1"
            style={{height:"300px",objectFit:"contain" }}
          />
          
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img  style={{height:"300px",objectFit:"contain" }}
            src="images/game2.jpeg"
            alt="slide2"
            // style={{ width: "100%", height: "600px" }}
          />
         
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            src="images/game3.jpeg"
            alt="slide3"
           style={{height:"300px",objectFit:"contain" }}
          />
          
        </div>

        {/* Slide 4 */}
        <div className="carousel-item">
          <img
            src="images/gc2.png"
            alt="slide4"
            style={{height:"300px",objectFit:"contain" }}
          />
          
        </div>

        {/* Slide 5 */}
        <div className="carousel-item">
          <img
            src="images/game6.jpeg"
            alt="slide5"
            style={{height:"300px",objectFit:"contain" }}
          />
          dit
        </div>

      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#mycarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon bg-success"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#mycarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon bg-success"></span>
      </button>
    </div>
  </div>
</section>
  )
}

export default Carousel