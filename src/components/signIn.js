import React from "react";
import A from "../assets/group_979.png";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
const SignIn = () => {
  return (
    <div className="row">
      <div className="col left">
        <p className="welcome">welcome to Batitos!</p>
        <p className="title">with us it's your best chance to cop DS shoes!</p>

        <p className="how">how does its work? </p>
        <h4>A limited drop for 100 people, A ticket cost $10</h4>
        <p className="limit">
          Limited one ticket per person for an equal chanceAll the shoes come
          with STOCKX / EBAY / Goat certification The drop will take place live
          on our YouTube page. One winner will win a shoes.That’s all, it’s that
          simple.
        </p>
      </div>
      <div className="col right">
        <img src={A} alt="logo" />
      </div>
      <div className="col social">
        <a href="" className="exp">
          <TiSocialTwitter size="22px" color="#fff" />
        </a>
        <a href="" className="exp">
          <FaFacebook size="22px" color="#fff" />
        </a>
        <a href="" className="exp">
          <AiOutlineInstagram size="22px" color="#fff" />
        </a>
        <a href="" className="exp">
          <AiFillYoutube size="22px" color="#fff" />
        </a>
      </div>
    </div>
  );
};

export default SignIn;
