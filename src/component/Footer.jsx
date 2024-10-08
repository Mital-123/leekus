import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
import { FaHands } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";
import { IoIosMailUnread } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
function Footer() {
  return (
    <>
      <div className="bg-footer text-white">
        <div className="container py-2 py-lg-4 ">
          <div className="row row-cols-1 row-cols-lg-3 m-0 p-0 mx-lg-5 mx-1">
            <div className="col py-2 py-lg-4  ">
              <div className="ms-lg-5 ms-0">
                <div className="pt-2">
                  <Link
                    to={"/aboutus"}
                    className="text-decoration-none text-white fw-medium"
                  >
                    {" "}
                    About Us
                  </Link>
                </div>
                <div className="pt-2">
                  <Link
                    to={"/contactus"}
                    className="text-decoration-none text-white fw-medium"
                  >
                    {" "}
                    Contact Us
                  </Link>
                </div>
                <div className="pt-2">
                  <Link
                    to={"tel:+91 7990890206"}
                    className="text-decoration-none text-white fw-medium prisefont"
                  >
                    + 91 7990890206
                  </Link>
                </div>
                <div className="pt-2">
                  <Link className="text-decoration-none text-white fw-medium">
                    {" "}
                    support@leekus.com
                  </Link>
                </div>
                <div className="pt-2">
                  <Link className="text-decoration-none text-white fw-medium">
                   MADE IN INDIA
                  </Link>
                </div>
              </div>
            </div>
            <div className="col py-3 py-lg-4">
              <div className="pt-2">
                <Link
                  to={"/trackorder"}
                  href=""
                  className="text-decoration-none text-white fw-medium"
                >
                  Track Order{" "}
                </Link>
              </div>
              <div className="pt-2">
                <Link
                  to={"/returnorder"}
                  className="text-decoration-none text-white fw-medium"
                >
                  Return Order
                </Link>
              </div>
              <div className="pt-2">
                <Link
                  to={"/ShipingPolicy"}
                  className="text-decoration-none text-white fw-medium"
                >
                  Shipping Policy
                </Link>
              </div>
              <div className="pt-2">
                <Link
                  to={"/refundpolicy"}
                  className="text-decoration-none text-white fw-medium"
                >
                  Refund Policy
                </Link>
              </div>
              <div className="pt-2">
                <Link
                  to={"/privacypolicy"}
                  className="text-decoration-none text-white fw-medium"
                >
                  Privacy Policy
                </Link>
              </div>
              <div className="pt-2">
                <Link
                  to={"/termservice"}
                  className="text-decoration-none text-white fw-medium"
                >
                  Terms Of Service
                </Link>
              </div>
            </div>
            <div className="col py-2 py-lg-4">
              <div className="ms-lg- ms-0 mb-3">
                <div className="d-flex align-content-center  mt-3">
                  <div className="mx-2 ms-0 fs-5 borde-white border  rounded-3 iconfooter">
                    <a
                      href="https://www.facebook.com/profile.php?id=61559369177591"
                      target="_blank"
                      className="nav-link"
                    >
                      <FaFacebookF style={{ marginBottom: "5px" }} />
                    </a>
                  </div>
                  <div className=" ms-2 fs-5 borde-white border  rounded-3 iconfooter">
                    <a
                      href="https://www.youtube.com/@leekus___"
                      target="_blank"
                      className="nav-link"
                    >
                      <FaYoutube style={{ marginBottom: "5px" }} />
                    </a>
                  </div>
                  <div className=" fs-5 ms-3 borde-white border  rounded-3 iconfooter">
                    <a
                      href="https://www.linkedin.com/in/leekus-2632ba30b/"
                      target="_blank"
                      className="nav-link"
                    >
                      <FaLinkedinIn style={{ marginBottom: "5px" }} />
                    </a>
                  </div>
                  <div className="mx-3  fs-5 borde-white border  rounded-3 iconfooter">
                    <a
                      href="https://www.instagram.com/leekus___/"
                      target="_blank"
                      className="nav-link"
                    >
                      <BsInstagram style={{ marginBottom: "5px" }} />
                    </a>
                  </div>
                  <div className=" fs-5 borde-white border  rounded-3 iconfooter">
                    <a
                      href="https://wa.me/7990890206"
                      target="_blank"
                      className="nav-link"
                    >
                      <BsWhatsapp style={{ marginBottom: "5px" }} />
                    </a>
                  </div>
                 
                </div>
              </div>
              <div>Newsletter</div>

              <form
                action="https://formsubmit.co/support@leekus.com"
                method="POST"
              >
                <div className="py-2 ">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="p-2 w-75 bg-white text-black border-1 border fw-medium"
                  />
                </div>
                <button className=" bg-transparent text-white border  border-1 p-2 fw-bold my-1 my-lg-3 text-center w-50 ">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="p-1 p-lg-2 d-flex justify-content-center bg-white text-black">
          Copyright © 2024, Leekus
        </div>
      </div>

      <div className="whtasapp">
        <a
          href="https://api.whatsapp.com/send?phone=7990890206"
          target="_blank"
        >
          <img
            src={require("../assets/images/whatsapp.png")}
            className="img-fluid"
            alt=""
          />
        </a>
      </div>
    </>
  );
}

export default Footer;
