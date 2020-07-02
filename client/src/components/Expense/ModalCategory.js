import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Collapse from "@material-ui/core/Collapse";

export default function ModalCategory(props) {
  const [isExpend1, setIsExpend1] = useState(false);
  const [isExpend2, setIsExpend2] = useState(false);
  const [isExpend3, setIsExpend3] = useState(false);
  const [isExpend4, setIsExpend4] = useState(false);
  const [isExpend5, setIsExpend5] = useState(false);
  const [isExpend6, setIsExpend6] = useState(false);
  const [isExpend7, setIsExpend7] = useState(false);
  const [isExpend8, setIsExpend8] = useState(false);
  const [isExpend9, setIsExpend9] = useState(false);

  const DarkMode = useSelector((state) => state.DarkMode);

  const { hanleCloseCategory } = props;
  const dispatch = useDispatch();
  const handleSelectCategory = (e) => {
    const value = e.target.value;
    dispatch({
      type: "CHOOSE_CATEGORY",
      choose: value,
    });
  };
  const handleEpendCategory = (num) => {
    if (num === 1) {
      setIsExpend1(!isExpend1);
    }
    if (num === 2) {
      setIsExpend2(!isExpend2);
    }
    if (num === 3) {
      setIsExpend3(!isExpend3);
    }
    if (num === 4) {
      setIsExpend4(!isExpend4);
    }
    if (num === 5) {
      setIsExpend5(!isExpend5);
    }
    if (num === 6) {
      setIsExpend6(!isExpend6);
    }
    if (num === 7) {
      setIsExpend7(!isExpend7);
    }
    if (num === 8) {
      setIsExpend8(!isExpend8);
    }
    if (num === 9) {
      setIsExpend9(!isExpend9);
    }
  };
  return (
    <div className="container-category">
      <div
        className={DarkMode ? "form-category dark-category" : "form-category"}
      >
        <div
          className={
            DarkMode
              ? "header-container-category dark-header-category"
              : "header-container-category"
          }
        >
          <i className="fas fa-cubes"></i>
          <span>Category</span>
        </div>
        <div
          className={
            DarkMode ? "main-category dark-main-category" : "main-category"
          }
        >
          <div>
            <div
              onClick={() => {
                return handleEpendCategory(1);
              }}
              className={
                DarkMode
                  ? "header-category dark-header-category"
                  : "header-category"
              }
            >
              <div
                className=" icon icon-header-category"
                style={{ backgroundColor: "#003049" }}
              >
                <i className="fas fa-hamburger"></i>
              </div>
              <span>Food and Beverage</span>
            </div>
            <Collapse
              in={isExpend1}
              timeout="auto"
              unmountOnExit
              disableStrictModeCompat={true}
            >
              <div className="container-category-icon">
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color1">
                      <i className="fas fa-mug-hot"></i>
                    </div>
                    Cafe
                    <input
                      type="radio"
                      value={["Cafe", "1", "fas fa-mug-hot"]}
                      onChange={handleSelectCategory}
                      name="category"
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color2">
                      <i className="fas fa-bread-slice"></i>
                    </div>
                    Breakfast
                    <input
                      type="radio"
                      value={["Breakfast", "2", "fas fa-bread-slice"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color3">
                      <i className="fas fa-concierge-bell"></i>
                    </div>
                    Lunch
                    <input
                      type="radio"
                      value={["Lunch", "3", "fas fa-concierge-bell"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color4">
                      <i className="fas fa-utensils"></i>
                    </div>
                    Dinner{" "}
                    <input
                      type="radio"
                      value={["Dinner", "4", "fas fa-utensils"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color5">
                      <i className="fas fa-glass-cheers"></i>
                    </div>
                    Drink
                    <input
                      type="radio"
                      value={["Drink", "5", "fas fa-glass-cheers"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color1">
                      <i className="fas fa-cookie-bite"></i>
                    </div>
                    Others
                    <input
                      type="radio"
                      value={["Others", "1", "fas fa-cookie-bite"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
              </div>
            </Collapse>
          </div>
          {/* ---------------------------Home------------------------- */}
          <div>
            <div
              onClick={() => {
                return handleEpendCategory(2);
              }}
              className={
                DarkMode
                  ? "header-category dark-header-category"
                  : "header-category"
              }
            >
              <div
                className=" icon icon-header-category"
                style={{ backgroundColor: "#d62828" }}
              >
                <i className="fas fa-home"></i>
              </div>
              <span>Home</span>
            </div>
            <Collapse
              in={isExpend2}
              timeout="auto"
              unmountOnExit
              disableStrictModeCompat={true}
            >
              <div className="container-category-icon">
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color1">
                      <i className="fas fa-money-bill-wave-alt"></i>
                    </div>
                    House fee
                    <input
                      type="radio"
                      value={["House Fee", "1", "fas fa-money-bill-wave-alt"]}
                      onChange={handleSelectCategory}
                      name="category"
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color2">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    Electricity
                    <input
                      type="radio"
                      value={["Electricity", "2", "fas fa-lightbulb"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color3">
                      <i className="fas fa-desktop"></i>
                    </div>
                    Cable TV
                    <input
                      type="radio"
                      value={["Cable TV", "3", "fas fa-desktop"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color4">
                      <i className="fas fa-fire"></i>
                    </div>
                    Gas
                    <input
                      type="radio"
                      value={["Gas", "4", "fas fa-fire"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color5">
                      <i className="fas fa-faucet"></i>
                    </div>
                    Water
                    <input
                      type="radio"
                      value={["Water", "5", "fas fa-faucet"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color1">
                      <i className="fas fa-faucet"></i>
                    </div>
                    Phone
                    <input
                      type="radio"
                      value={["Phone", "1", "fas fa-faucet"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color2">
                      <i className="fas fa-globe-asia"></i>
                    </div>
                    Internet
                    <input
                      type="radio"
                      value={["Internet", "2", "fas fa-globe-asia"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
              </div>
            </Collapse>
          </div>
          {/* --------------------tansport---------------------------- */}
          <div>
            <div
              onClick={() => {
                return handleEpendCategory(3);
              }}
              className={
                DarkMode
                  ? "header-category dark-header-category"
                  : "header-category"
              }
            >
              <div
                className=" icon icon-header-category"
                style={{ backgroundColor: "#f77f00" }}
              >
                <i className="fas fa-traffic-light"></i>
              </div>
              <span>Auto And Transport</span>
            </div>
            <Collapse
              in={isExpend3}
              timeout="auto"
              unmountOnExit
              disableStrictModeCompat={true}
            >
              <div className="container-category-icon">
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color1">
                      <i className="fas fa-car-side"></i>
                    </div>
                    Car Wash
                    <input
                      type="radio"
                      value={["Car Wash", "1", "fas fa-car-side"]}
                      onChange={handleSelectCategory}
                      name="category"
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color2">
                      <i className="fas fa-gas-pump"></i>
                    </div>
                    Fuel
                    <input
                      type="radio"
                      value={["Fuel", "2", "fas fa-gas-pump"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color3">
                      <i className="fas fa-parking"></i>
                    </div>
                    Parking
                    <input
                      type="radio"
                      value={["Parking", "3", "fas fa-parking"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color4">
                      <i className="fas fa-tools"></i>
                    </div>
                    Repair Vehicles
                    <input
                      type="radio"
                      value={["Repair Vehicles", "4", "fas fa-tools"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color5">
                      <i className="fas fa-taxi"></i>
                    </div>
                    Taxi
                    <input
                      type="radio"
                      value={["Taxi", "5", "fas fa-taxi"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
              </div>
            </Collapse>
          </div>
          {/* --------------------Kids---------------------------- */}
          <div>
            <div
              onClick={() => {
                return handleEpendCategory(4);
              }}
              className={
                DarkMode
                  ? "header-category dark-header-category"
                  : "header-category"
              }
            >
              <div
                className=" icon icon-header-category"
                style={{ backgroundColor: "#fcbf49" }}
              >
                <i className="fas fa-baby"></i>
              </div>
              <span>Kids</span>
            </div>
            <Collapse
              in={isExpend4}
              timeout="auto"
              unmountOnExit
              disableStrictModeCompat={true}
            >
              <div className="container-category-icon">
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color1">
                      <i className="fas fa-prescription-bottle"></i>
                    </div>
                    Baby Supplies
                    <input
                      type="radio"
                      value={[
                        "Baby Supplies",
                        "1",
                        "fas fa-prescription-bottle",
                      ]}
                      onChange={handleSelectCategory}
                      name="category"
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color2">
                      <i className="fas fa-gamepad"></i>
                    </div>
                    Toys
                    <input
                      type="radio"
                      value={["Toys", "2", "fas fa-gamepad"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color3">
                      <i className="fas fa-book-reader"></i>
                    </div>
                    Books
                    <input
                      type="radio"
                      value={["Books", "3", "fas fa-book-reader"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color4">
                      <i className="fas fa-dollar-sign"></i>
                    </div>
                    Tuition
                    <input
                      type="radio"
                      value={["Tuition", "4", "fas fa-dollar-sign"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
              </div>
            </Collapse>
          </div>
          {/* --------------------Clothing---------------------------- */}
          <div>
            <div
              onClick={() => {
                return handleEpendCategory(5);
              }}
              className={
                DarkMode
                  ? "header-category dark-header-category"
                  : "header-category"
              }
            >
              <div
                className=" icon icon-header-category"
                style={{ backgroundColor: "#eae2b7" }}
              >
                <i className="fas fa-tshirt"></i>
              </div>
              <span>Clothing</span>
            </div>
            <Collapse
              in={isExpend5}
              timeout="auto"
              unmountOnExit
              disableStrictModeCompat={true}
            >
              <div className="container-category-icon">
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color1">
                      <i className="fas fa-clock"></i>
                    </div>
                    Watch
                    <input
                      type="radio"
                      value={["Watch", "1", "fas fa-clock"]}
                      onChange={handleSelectCategory}
                      name="category"
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color2">
                      <i className="fas fa-tshirt"></i>
                    </div>
                    Clothes
                    <input
                      type="radio"
                      value={["Clothes", "2", "fas fa-tshirt"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color3">
                      <i className="fas fa-shoe-prints"></i>
                    </div>
                    Shoes
                    <input
                      type="radio"
                      value={["Choes", "3", "fas fa-shoe-prints"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
              </div>
            </Collapse>
          </div>
          {/* --------------------Gifts---------------------------- */}
          <div>
            <div
              onClick={() => {
                return handleEpendCategory(6);
              }}
              className={
                DarkMode
                  ? "header-category dark-header-category"
                  : "header-category"
              }
            >
              <div
                className=" icon icon-header-category"
                style={{ backgroundColor: "#05668d" }}
              >
                <i className="fas fa-gifts"></i>
              </div>
              <span>Gifts & Donations</span>
            </div>
            <Collapse
              in={isExpend6}
              timeout="auto"
              unmountOnExit
              disableStrictModeCompat={true}
            >
              <div className="container-category-icon">
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color1">
                      <i className="fas fa-hand-holding-heart"></i>
                    </div>
                    Charity
                    <input
                      type="radio"
                      value={["Watch", "1", "fas fa-hand-holding-heart"]}
                      onChange={handleSelectCategory}
                      name="category"
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color2">
                      <i className="fas fa-sad-tear"></i>
                    </div>
                    Funerals
                    <input
                      type="radio"
                      value={["Funerals", "2", "fas fa-sad-tear"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color3">
                      <i className="fas fa-gift"></i>
                    </div>
                    Gifts
                    <input
                      type="radio"
                      value={["Choes", "3", "fas fa-gift"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color4">
                      <i className="fas fa-ring"></i>
                    </div>
                    Marriages
                    <input
                      type="radio"
                      value={["Marriages", "4", "fas fa-ring"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
              </div>
            </Collapse>
          </div>
          {/* --------------------Healthy---------------------------- */}
          <div>
            <div
              onClick={() => {
                return handleEpendCategory(7);
              }}
              className={
                DarkMode
                  ? "header-category dark-header-category"
                  : "header-category"
              }
            >
              <div
                className=" icon icon-header-category"
                style={{ backgroundColor: "#028090" }}
              >
                <i className="fas fa-prescription-bottle-alt"></i>
              </div>
              <span>Healthy & Fitness</span>
            </div>
            <Collapse
              in={isExpend7}
              timeout="auto"
              unmountOnExit
              disableStrictModeCompat={true}
            >
              <div className="container-category-icon">
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color1">
                      <i className="fas fa-user-md"></i>
                    </div>
                    Docter
                    <input
                      type="radio"
                      value={["Docter", "1", "fas fa-user-md"]}
                      onChange={handleSelectCategory}
                      name="category"
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color2">
                      <i className="fas fa-capsules"></i>
                    </div>
                    Pharmacy
                    <input
                      type="radio"
                      value={["Pharmacy", "2", "fas fa-capsules"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color3">
                      <i className="fas fa-futbol"></i>
                    </div>
                    Sports
                    <input
                      type="radio"
                      value={["Sports", "3", "fas fa-futbol"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color4">
                      <i className="fas fa-dumbbell"></i>
                    </div>
                    Gym
                    <input
                      type="radio"
                      value={["Gym", "4", "fas fa-dumbbell"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
              </div>
            </Collapse>
          </div>
          {/* --------------------Entertainment---------------------------- */}
          <div>
            <div
              onClick={() => {
                return handleEpendCategory(8);
              }}
              className={
                DarkMode
                  ? "header-category dark-header-category"
                  : "header-category"
              }
            >
              <div
                className=" icon icon-header-category"
                style={{ backgroundColor: "#00a896" }}
              >
                <i className="fas fa-building"></i>
              </div>
              <span>Entertainment</span>
            </div>
            <Collapse
              in={isExpend8}
              timeout="auto"
              unmountOnExit
              disableStrictModeCompat={true}
            >
              <div className="container-category-icon">
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color1">
                      <i className="fas fa-headphones-alt"></i>
                    </div>
                    Music
                    <input
                      type="radio"
                      value={["Music", "1", "fas fa-headphones-alt"]}
                      onChange={handleSelectCategory}
                      name="category"
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color2">
                      <i className="fas fa-film"></i>
                    </div>
                    Movies
                    <input
                      type="radio"
                      value={["Movies", "2", "fas fa-film"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color3">
                      <i className="fas fa-plane-departure"></i>
                    </div>
                    Travel
                    <input
                      type="radio"
                      value={["Travel", "3", "fas fa-plane-departure"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
              </div>
            </Collapse>
          </div>
          {/* ----------------------Person-------------------------- */}
          <div>
            <div
              onClick={() => {
                return handleEpendCategory(9);
              }}
              className={
                DarkMode
                  ? "header-category dark-header-category"
                  : "header-category"
              }
            >
              <div
                className=" icon icon-header-category"
                style={{ backgroundColor: "#02c39a" }}
              >
                <i className="fas fa-user"></i>
              </div>
              <span>Person</span>
            </div>
            <Collapse
              in={isExpend9}
              timeout="auto"
              unmountOnExit
              disableStrictModeCompat={true}
            >
              <div className="container-category-icon">
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color1">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    Education
                    <input
                      type="radio"
                      value={["Education", "1", "fas fa-graduation-cap"]}
                      onChange={handleSelectCategory}
                      name="category"
                    />
                  </label>
                </div>
                <div
                  className={
                    DarkMode
                      ? "category-icon dark-category-icon"
                      : "category-icon"
                  }
                >
                  <label>
                    <div className="icon category-color2">
                      <i className="fas fa-heart"></i>
                    </div>
                    Hoppies
                    <input
                      type="radio"
                      value={["Hoppies", "2", "fas fa-heart"]}
                      name="category"
                      onChange={handleSelectCategory}
                    />
                  </label>
                </div>
              </div>
            </Collapse>
          </div>
        </div>

        <div className="bt-lose-category">
          <button
            onClick={() => {
              return hanleCloseCategory();
            }}
            id={DarkMode ? "dart-bt-category" : null}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
