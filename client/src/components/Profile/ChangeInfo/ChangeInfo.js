import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ImageProfile from "../../../assets/images/selfie.svg";

export default function ChangeInfo() {
  const [isChange, setIsChange] = useState(false);
  const [number, setNumber] = useState(0);
  const [valueName, setValueName] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valuePass, setValuePass] = useState("");
  const [file, setFile] = useState(null);
  const DarkMode = useSelector((state) => state.DarkMode);
  const url = "https://be-money.herokuapp.com/";

  const handleChangeInfo = (num) => {
    if (num === 1) {
      setIsChange(!isChange);
      setNumber(1);
    }
    if (num === 2) {
      setIsChange(!isChange);
      setNumber(2);
    }
    if (num === 3) {
      setIsChange(!isChange);
      setNumber(3);
    }
  };

  // Update user
  const handleFile = (event) => {
    const value = event.target.files[0];
    setFile(value);
  };
  const handleName = (event) => {
    const value = event.target.value;
    setValueName(value);
  };
  const handleEmail = (event) => {
    const value = event.target.value;
    setValueEmail(value);
  };
  const handlePass = (event) => {
    const value = event.target.value;
    setValuePass(value);
  };
  const handleSumitInfo = (event) => {
    // event.preventDefault();
    // const fd = new FormData();
    // fd.append("file", file);
    // fd.append("_id", CheckLogin.data._id);
    // fd.append("name", valueName);
    // fd.append("email", valueEmail);
    // fd.append("pass", valuePass);
    // axios
    //   .post(url + "users/update", fd)
    //   .then((res) => {
    //     console.log(res.data);
    //     setValueMoney("");
    //     return checkLogined();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className="profile" id={DarkMode ? "dark-profile" : null}>
      <div className="header-profile">
        <i class="fas fa-user-edit user-edit"></i>
        <h3 id={DarkMode ? "dark-title" : null}>Your profile</h3>
      </div>
      <form onSubmit={handleSumitInfo}>
        <div className="container-avatar-profile">
          <div>
            <label>
              <div
                className="avatar-profile"
                // style={{
                //   backgroundImage: `url(${
                //     CheckLogin.data && CheckLogin.data.avatarUrl
                //   })`,
                // }}
              >
                <div>
                  <i className="fas fa-camera"></i>
                </div>
              </div>
              <input
                type="file"
                className="input-file-profile"
                onChange={handleFile}
              />
            </label>
          </div>

          <img
            src={ImageProfile}
            style={{ width: 200, marginLeft: "auto" }}
            alt=""
          />
        </div>
        <div className="input-profile">
          <div className="container-icon-input">
            <div>
              <i className="fas fa-user"></i>
            </div>
            {/* <span> {CheckLogin.data && CheckLogin.data.name}</span> */}
            <button
              type="button"
              onClick={() => {
                return handleChangeInfo(1);
              }}
            >
              Change
            </button>
          </div>
          {isChange && number === 1 ? (
            <input
              type="text"
              value={valueName}
              onChange={handleName}
              id={DarkMode ? "dark-input" : null}
            />
          ) : null}

          <div className="container-icon-input">
            <div id="mail-profile">
              <i className="fas fa-envelope-open"></i>
            </div>
            {/* <span>{CheckLogin.data && CheckLogin.data.email}</span> */}
            <button
              type="button"
              onClick={() => {
                return handleChangeInfo(2);
              }}
            >
              Change
            </button>
          </div>
          {isChange && number === 2 ? (
            <input
              type="text"
              value={valueEmail}
              onChange={handleEmail}
              id={DarkMode ? "dark-input" : null}
            />
          ) : null}

          <div className="container-icon-input">
            <div id="pass-profile">
              <i className="fas fa-lock"></i>
            </div>
            <span>Your Password</span>
            <button
              type="button"
              onClick={() => {
                return handleChangeInfo(3);
              }}
            >
              Change
            </button>
          </div>
          {isChange && number === 3 ? (
            <input
              type="text"
              value={valuePass}
              onChange={handlePass}
              id={DarkMode ? "dark-input" : null}
            />
          ) : null}
        </div>
        <div className="bt-profile">
          <button type="submit" id={DarkMode ? "dark-bt-profile" : null}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
