import React from 'react';
import ImageHero from 'assets/images/hero.jpg';
import ImageHeroFrame from 'assets/images/hero-frame.jpg';
import IconCities from 'assets/icons/ic_cities.svg';
import IconTravelers from 'assets/icons/ic_travelers.svg';
import IconTreasures from 'assets/icons/ic_treasures.svg';
import Button from 'elements/Button';
import formatNumber from 'utils/formatNumber'

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth"
    })
  }

  return (
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold mb-3 hero-text">
              Forget busy work, <br />start next vacation
            </h1>
            <p className="mb-4 font-weight-light text-gray-500" style={{ width: 330, lineHeight: "170%" }}>
              We provide what you need to enjoy your
              holiday with family. Time to make another
              memorable moments.
            </p>
            <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
              Show Me Now
            </Button>
            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto" style={{ paddingRight: 50 }}>
                <img src={IconTravelers} width="32" alt={`${props.data.travelers} Travelers`} />
                <h6 className="mt-3">
                  {formatNumber(props.data.travelers)} <span className="text-gray-500 font-weight-light">Travelers</span>
                </h6>
              </div>
              <div className="col-auto" style={{ paddingRight: 50 }}>
                <img src={IconCities} width="32" alt={`${props.data.cities} Cities`} />
                <h6 className="mt-3">
                  {formatNumber(props.data.cities)} <span className="text-gray-500 font-weight-light">Cities</span>
                </h6>
              </div>
              <div className="col-auto">
                <img src={IconTreasures} width="32" alt={`${props.data.treasures} Treasures`} />
                <h6 className="mt-3">
                  {formatNumber(props.data.treasures)} <span className="text-gray-500 font-weight-light">Treasures</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6 pl-5">
            <div style={{ width: 520, height: 410 }}>
              <img src={ImageHero} alt="Room with couches" className="img-fluid position-absolute" style={{ margin: "-30px 0 0 -30px", zIndex: 1 }} />
              <img src={ImageHeroFrame} alt="Room with couches frame" className="img-fluid position-absolute" style={{ margin: "0 -15px -15px 0" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
