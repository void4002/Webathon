import Carousel from 'react-bootstrap/Carousel';

function Car() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-80"
          src="https://www.verywellfit.com/thmb/48JzdSQoToP0GGs6xOhmI3S8aDE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-585296166-95e2824ee4fc4229904ea56cd0977ffb.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Nutritious Food</h3>
          <p>Following a healthy diet has many benefits, including building strong bones, protecting the heart, preventing disease, and boosting mood.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/319/2022/01/28182331/iStock-1254899472.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Doctor Tips</h3>
          <p>Top nutrition expert explains how food can help heal the body.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.emedihealth.com/wp-content/uploads/2022/09/low-calorie-foods-feat.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Low Carb Recipes</h3>
          <p>
            Gain access to various low carb Recipes and try them in your diet.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Car;