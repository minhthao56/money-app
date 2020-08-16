import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// Image
import ImageProfile from "../../../assets/images/selfie.svg";

export default function ChangeInfo(props) {
  const [isChange, setIsChange] = useState(false);
  const [number, setNumber] = useState(0);
  const [file, setFile] = useState(null);

  const { handleSubmitChange, CheckLogin, DarkMode } = props;

  const handleChangeInfo = (num) => {
    setIsChange(!isChange);
    setNumber(num);
  };
  // handleFile
  const handleFile = (event) => {
    const value = event.target.files[0];
    setFile(value);
  };
  // Validation
  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email"),
    password: Yup.string()
      .min(6, "Limit 6 characters")
      .max(10, "Limit 10 characters"),
    name: Yup.string()
      .min(4, "Limit 4 characters")
      .max(15, "Max 15 characters"),
  });
  // hanlde Submit
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values, { resetForm }) =>
      handleSubmitChange(values, resetForm, file),
  });

  return (
    <div className="profile" id={DarkMode ? "dark-profile" : null}>
      <div className="header-profile">
        <i className="fas fa-user-edit user-edit"></i>
        <h3 id={DarkMode ? "dark-title" : null}>Your profile</h3>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="container-avatar-profile">
          <div>
            <label>
              <div
                className="avatar-profile"
                style={{ backgroundImage: `url(${CheckLogin.avatarUrl})` }}
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
            <span> {CheckLogin.name}</span>
            <button type="button" onClick={() => handleChangeInfo(1)}>
              Change
            </button>
          </div>
          {isChange && number === 1 ? (
            <div>
              <span className="msg-err">
                {formik.touched.name && formik.errors.name}
              </span>
              <br />
              <input
                type="text"
                name="name"
                placeholder="Name"
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
            </div>
          ) : null}

          <div className="container-icon-input">
            <div id="mail-profile">
              <i className="fas fa-envelope-open"></i>
            </div>
            <span>{CheckLogin.email}</span>
            <button type="button" onClick={() => handleChangeInfo(2)}>
              Change
            </button>
          </div>
          {isChange && number === 2 ? (
            <div>
              <span className="msg-err">
                {formik.touched.email && formik.errors.email}
              </span>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                value={formik.values.email}
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          ) : null}

          <div className="container-icon-input">
            <div id="pass-profile">
              <i className="fas fa-lock"></i>
            </div>
            <span>Your Password</span>
            <button type="button" onClick={() => handleChangeInfo(3)}>
              Change
            </button>
          </div>
          {isChange && number === 3 ? (
            <div>
              <span className="msg-err">
                {formik.touched.password && formik.errors.password}
              </span>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
            </div>
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
