import React from 'react';
import Star from 'elements/Star';
import Button from 'elements/Button';
import TestimonialAccent from 'assets/images/testimonial-landingpage-frame.jpg';
import Fade from 'react-reveal/Fade';

export default function Testimonial({ data }) {
  return (
    <Fade bottom>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-auto" style={{ marginRight: 70 }}>
              <div className="testimonial-hero" style={{ margin: '30px 0 0 30px' }}>
                <img src={data.imageUrl} alt="Testimonial" className="position-absolute" style={{ zIndex: 1 }} />
                <img src={TestimonialAccent} alt="Testimonial frame" className="position-absolute" style={{ margin: '-30px 0 0 -30px' }} />
              </div>
            </div>
            <div className="col">
              <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
              <Star value={data.rate} width={35} height={35} spacing={2} />
              <h5 className="h2 line-height-2 my-3" style={{ fontWeight: 400 }}>{data.content}</h5>
              <span className="text-gray-500">{data.familyName}, {data.familyOccupation}</span>
              <div>
                <Button className="btn px-5" style={{ marginTop: 40 }} hasShadow isPrimary type="link" href={`/testimonial/${data._id}`}>Read Their Story</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  )
}
