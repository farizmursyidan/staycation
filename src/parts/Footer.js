import React from 'react';
import Button from 'elements/Button';
import IconText from 'parts/IconText';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <IconText />
            <p className="brand-tagline">
              We kaboom your beautiful holiday instantly and memorable.
            </p>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">New Account</Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">Start Booking</Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">Use Payments</Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">Our Careers</Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">Privacy</Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">Terms</Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="mailto:support@staycation.id">support@staycation.id</Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+622103071997">021 - 0307 - 1997</Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, Kebayoran Lama, Jakarta Selatan</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            &copy; 2020 | All Rights Reserved | Staycation
          </div>
        </div>
      </div>
    </footer>
  )
}
