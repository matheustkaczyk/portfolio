import Slider from 'react-slick';

const Tools = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return(
    <section className="tools" id="tools">
      <Slider settings={settings}>

      </Slider>
    </section>
  )
}

export default Tools;
