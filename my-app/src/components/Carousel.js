function Carousel() {
  return (  
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="card"> {/*somehow add in object-fit to keep images from stretching*/}
                        <img className="card-img-top" style="height: 300px " src="images/slideFit.png"
                            alt="Placeholder for Site logo link">
                    </div> {/* not suure why but the div are wonky*/}
                </div>
                <div className="carousel-item">
                    <div className="card">
                        <img className="card-img-top" style="height: 300px" src="images/slide1.jpg"
                            alt="Placeholder for Site logo link">
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card">
                        <img className="card-img-top" style="height: 300px " src="https://via.placeholder.com/100"
                            alt="Placeholder for Site logo link">
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" 
              type="button" 
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div> 
  );
};