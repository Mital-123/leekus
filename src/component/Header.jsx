import React, { useEffect, useState } from "react";
import "../assets/css/Header.css";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { IoBagHandle } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Productall from "./Productall";
import { LinkAction } from "../redux/actions/LInkAction";
import { wishlistdata } from "../redux/actions/wishlistAction";
import { AddCartAction } from "../redux/actions/addCartAction";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
function Header() {
  const dispatch = useDispatch();

  // filter
  const state = useSelector((state) => state);

  const clothingdata = state.allcategory.allcategory.data;

  const products = state.wish?.wish?.data;
  const addtocart = state.addcart.addcart.data;

  const [filteredData, setFilteredData] = useState();
  // State to hold filter criteria
  const [filterCriteria, setFilterCriteria] = useState("");
  const [offcanvasHeight, setOffcanvasHeight] = useState("90px");
  // Function to handle filtering based on user input
  const handleFilter = (e) => {
    const keyword = e.target.value.toLowerCase();
    setFilterCriteria(keyword);
    if (keyword === "") {
      setFilteredData();
      setOffcanvasHeight("90px");
    } else {
      // Filter data based on input keyword
      const filtered = clothingdata.filter(
        (item) =>
          item.product_name.toLowerCase().includes(keyword) ||
          item.category_name.toLowerCase().includes(keyword) ||
          item.subcategory_name.toLowerCase().includes(keyword)
      );
      setFilteredData(filtered);
      setOffcanvasHeight(filtered.length > 0 ? "400px" : "90px");
    }
  };

  return (
    <>
      <header
        className="w-100 position-sticky top-0 z-3 quaheader_design "
        id="headermaincss"
        style={{
          backgroundColor: "var(--color--)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <nav className="z-2">
          <div className="d-flex align-items-center  justify-content-between">
            <button
              className="btn toggle-menu text-black fw-bold fs-1 p-0 border-0 text-white"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              <IoMdMenu />
            </button>
            <div
              style={{ width: "100px", marginTop: "10px" }}
              className=" d-lg-none d-block imghead"
            >
              <Link to={"/"}>
                <img
                  src={require("../assets/images/KP LOGO FINAL (1).jpg")}
                  alt=""
                  className="img-fluid w-100"
                />
              </Link>
            </div>
            <div className=" d-lg-none d-block mt-2">
              <button
                type="button"
                className="btn border-0 p-0 mb-1 ms-3 text-secondary fw-medium"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasTop"
                aria-controls="offcanvasTop"
              >
                <Link className="text-black fs-3 pe-2">
                  <IoSearch className="text-white" />
                </Link>
              </button>
              <Link
                to={"/cartadd"}
                className="text-black fs-4"
                style={{ position: "relative", display: "inline-block" }}
              >
                <IoBagHandle className="text-white fs-4" />
                <span
                  className=" prisefont wish_lengthnum rounded-circle text-white bg-danger d-flex justify-content-center align-content-center align-items-center  fw-bold p-1 fs-6"
                  style={{
                    position: "absolute",
                    top: " -4px",
                    right: " -9px",
                    width: "20px",
                    height: "20px",
                  }}
                >
                  {addtocart?.length > 0 ? addtocart?.length : 0}
                </span>
              </Link>
              <Link
                to={"/account"}
                className="text-decoration-none text-black mx-2"
              >
                <FaRegUser className="text-white fs-4" />
              </Link>
            </div>
          </div>
          <div className="d-none d-lg-block">
            <ul className="main-menu ms-3 d-flex justify-content-between align-items-center">
              <div style={{ width: "120px" }} className="d-inline-block">
                <Link to={"/"}>
                  <img
                    src={require("../assets/images/KP LOGO FINAL (1).jpg")}
                    alt=""
                    className="img-fluid w-100"
                  />
                </Link>
              </div>

              <div className="align-item-center">
                <li>
                  <Link to={"/"} className="hoverheader_menu">
                    Home
                  </Link>
                </li>
                <li className="dropdown ">
                  <Link to={"/clothingall"}>Clothing</Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to={"/clothingall"}> All</Link>
                    </li>

                    <li>
                      <Link to={"/clothing/" + "top"}>Top</Link>
                    </li>
                    <li>
                      <Link to={"/clothing/" + "Pant"}>Pant & Trowzer</Link>
                    </li>
                    <li>
                      <Link to={"/clothing/" + "Shirt"}>Shirt</Link>
                    </li>
                    <li>
                      <Link to={"/clothing/" + "t-shirt"}>T-shirt</Link>
                    </li>
                    <li>
                      <Link to={"/clothing/" + "Blazer"}>Blazer</Link>
                    </li>
                    <li>
                      <Link to={"/clothing/" + "Co-ords-Sets"}>
                        Co-ords-Sets
                      </Link>
                    </li>

                    <li>
                      <Link to={"/clothing/" + "Skirt"}>Skirt</Link>
                    </li>
                    <li>
                      <Link to={"/clothing/" + "Dress"}>Dress</Link>
                    </li>
                  </ul>
                </li>

                <li className="dropdown hoverheader_menu">
                  <Link to={"/collectionrange"}> Collections</Link>
                </li>
                <li>
                  <Link to={"/accessories"} className="hoverheader_menu">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link to={"/blog"} className="hoverheader_menu">
                    Blog
                  </Link>
                </li>
              </div>

              <div className="">
                <button
                  className="btn text-white border border-white px-5"
                  style={{ marginTop: "-5px", marginRight: "0px" }}
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasTop"
                  aria-controls="offcanvasTop"
                >
                  {" "}
                  <IoSearch className="text-white" /> search
                </button>
                {localStorage.getItem("user_id") && (
                  <Link
                    to={"/wishlist"}
                    className="text-decoration-none text-black ms-3 text-white me-2"
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <MdFavoriteBorder className="text-white fs-2" />
                    <span
                      className="wish_lengthnum rounded-circle text-white bg-danger d-flex justify-content-center prisefont align-content-center align-items-center  fw-bold p-1"
                      style={{
                        position: "absolute",
                        top: " -8px",
                        right: " -9px",
                        width: "20px",
                        height: "20px",
                      }}
                    >
                      {products?.length > 0 ? products?.length : 0}
                    </span>
                  </Link>
                )}

                {localStorage.getItem("user_id") && (
                  <Link
                    to={"/cartadd"}
                    className="text-decoration-none text-black ms- text-white ms-1"
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <IoBagHandle className="text-white fs-4" />
                    <span
                      className=" prisefont wish_lengthnum rounded-circle text-white bg-danger d-flex justify-content-center align-content-center align-items-center  fw-bold p-1"
                      style={{
                        position: "absolute",
                        top: " -8px",
                        right: " -9px",
                        width: "20px",
                        height: "20px",
                      }}
                    >
                      {addtocart?.length > 0 ? addtocart?.length : 0}
                    </span>
                  </Link>
                )}
                <li className=" text-secondary fw-medium ">
                  <Link
                    to={"/account"}
                    className="text-decoration-none text-black "
                  >
                    <FaRegUser className="text-white fs-4" />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </nav>

        {/*  media sixze header */}
        <div
          className="headoff offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabindex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
              <Link to={"/"}>
                <img
                  src={require("../assets/images/KP LOGO FINAL (1).jpg")}
                  className="img-fluid"
                  style={{ width: "80px" }}
                  alt=""
                />
              </Link>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="border-bottom py-3 ps-4 ">
              <Link to={"/"} className="text-decoration-none text-black">
                Home
              </Link>
            </div>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item text-black">
                <h2 className="accordion-header text-black">
                  <button
                    className="accordion-button collapsed text-black fw-bold ps-4"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Clothing
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body ps-4">
                    <div className="pb-1">
                      <Link
                        to={"/clothingall"}
                        className="offcanvasdesign text-black"
                      >
                        All
                      </Link>
                    </div>
                    <div className="py-2">
                      <Link
                        to={"/clothing/" + "top"}
                        className="offcanvasdesign text-black"
                      >
                        Top
                      </Link>
                    </div>

                    <div className="py-2">
                      <Link
                        to={"/clothing/" + "Pant"}
                        className="offcanvasdesign text-black"
                      >
                        Pant & Trowzer
                      </Link>
                    </div>
                    <div className="py-2">
                      <Link
                        to={"/clothing/" + "Shirt"}
                        className="offcanvasdesign text-black"
                      >
                        Shirt
                      </Link>
                    </div>
                    <div className="py-2">
                      <Link
                        to={"/clothing/" + "t-shirt"}
                        className="offcanvasdesign text-black"
                      >
                        T-Shirt
                      </Link>
                    </div>
                    <div className="py-2">
                      <Link
                        to={"/clothing/" + "Blazer"}
                        className="offcanvasdesign text-black py-3"
                      >
                        Blazer
                      </Link>
                    </div>
                    <div className="py-2">
                      <Link
                        to={"/clothing/" + "Co-ords-Sets"}
                        className="offcanvasdesign text-black py-3"
                      >
                        Co-ords-Sets
                      </Link>
                    </div>
                    <div className="py-2">
                      <Link
                        to={"/clothing/" + "Skirt"}
                        className="offcanvasdesign text-black py-3"
                      >
                        Skirt
                      </Link>
                    </div>
                    <div className="py-2">
                      <Link
                        to={"/clothing/" + "Dress"}
                        className="offcanvasdesign text-black py-3"
                      >
                        Dress
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-bottom py-3 ps-4 ">
                <Link
                  to={"/collectionrange"}
                  className="text-decoration-none text-black"
                >
                  Collections
                </Link>
              </div>

              <div className="border-bottom py-3 ps-4 ">
                <Link
                  to={"/contactus"}
                  className="text-decoration-none text-black"
                >
                  Contact
                </Link>
              </div>
              <div className="border-bottom py-3 ps-4 ">
                <Link to={"/blog"} className="text-decoration-none text-black">
                  Blog
                </Link>
              </div>
            </div>
          </div>

          <div className="container fw-bold fs-5 p-1 px-3  ">
            <Link
              to={"/account"}
              className="accordion offcanvasdesign d-flex align-items-center p-1 border-top"
            >
              <span className="pe-1 pb-1 fw-medium">
                <FaRegUser />
              </span>{" "}
              Account
            </Link>
          </div>
        </div>
      </header>

      <div className="d-flex justify-content-center align-content-center searchbar">
        <div
          className="offcanvas offcanvas-top shadow-lg border border-2 border-dark mx-auto"
          data-bs-backdrop="false"
          style={{ height: offcanvasHeight }}
          data-bs-scroll="true"
          tabindex="-1"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title vw-100 " id="offcanvasTopLabel">
              {" "}
              <input
                type="text"
                name="search"
                placeholder="search..."
                className="border-0 w-100  searchinput_focus"
                style={{ maxWidth: "" }}
                value={filterCriteria}
                onChange={handleFilter}
              />
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body custom-offcanvas-body bg-white ">
            <div className="row">
              {filteredData?.map((x, id) => {
                const colorNames = x.colour_name.at(0);
                return (
                  <>
                    <div key={id} className="col-12">
                      <Link
                        to={`/productpurchase/${x.product_name}/${x.id}/${colorNames.colour_id}`}
                        className="nav-link"
                      >
                        <div className="product-name cursor">
                          <h5 className="p ">{x.product_name}</h5>
                          <hr />
                        </div>
                      </Link>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
