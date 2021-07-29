function Carousel() {
  return(
    <div className="container-fluid">
      <div className="card bg-dark text-white" style={{}}>
        <img src="https://via.placeholder.com/100" class="card-img" alt="this is img 1" />
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  )
};
export default Carousel;