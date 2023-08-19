import React from "react";
import "./Services.css";
import { ServicesIcon } from "./ServicesElements";
import Icon1  from '../../images/undraw_in_no_time_-6-igu.svg'
import Icon2  from '../../images/undraw_transfer_money_re_6o1h.svg'
import Icon3  from '../../images/undraw_plain_credit_card_re_c07w.svg'

const Services = () => {
  return (
    <section className="services-container" id="services">
      <h1 className="services-h1">Our Services</h1>
      <div className="services-wrapper">
        <div className="services-card">
          <ServicesIcon src={Icon1} />
          <h2 className="services-h2">Reduce Expenses</h2>
          <p className="services-p">
            We help reduce your fees and incease your overall revenue.
          </p>
        </div>
        <div className="services-card">
          <ServicesIcon src={Icon2} />
          <h2 className="services-h2">Virtual Offices</h2>
          <p className="services-p">
            You can access our platfomr online anywhere in the world.
          </p>
        </div>
        <div className="services-card">
          <ServicesIcon src={Icon3} />
          <h2 className="services-h2">Premium Benefits</h2>
          <p className="services-p">
            We help reduce your fees and incease your overall revenue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
