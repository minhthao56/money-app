import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
//scss
import "./Profile.scss";
//componenst
import { ChangeInfo, IcomeAndHistory } from "../components/Profile";
//apu
import apiProfile from "../services/apiClientAxios/apiProfile";
import apiHome from "../services/apiClientAxios/apiHome";

export default function Profile() {
  const [dataIcome, setDataIcome] = useState();

  const Blur = useSelector((state) => state.Blur);
  const DarkMode = useSelector((state) => state.DarkMode);
  const CheckLogin = useSelector((state) => state.CheckLogin);
  const dispatch = useDispatch();

  const handleSubmitChange = (values, resetForm, file) => {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("name", values.name);
    fd.append("email", values.email);
    fd.append("pass", values.password);
    apiProfile
      .postChangeDataUser(fd)
      .then((res) => {
        resetForm({ values: "" });
        dispatch({
          type: "CHECK_LOGGED",
          action: res,
        });
      })
      .catch((err) => console.log(err));
  };

  const handleSubmitAddMoney = (values) => {
    apiHome.postAddIncome(values).then((res) => console.log(res));
  };

  useEffect(() => {
    apiProfile.getIcome().then((res) => setDataIcome(res));
  }, []);
  return (
    <div
      className={
        DarkMode
          ? "full-container-profile dark-full-container-profile"
          : "full-container-profile"
      }
      id={Blur ? "blur-porfile" : null}
    >
      <h2 className={DarkMode ? "dark-title light-title" : "light-title"}>
        Your Account
      </h2>
      <Row gutter={[16, 16]} className="container-profile-history">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <ChangeInfo
            handleSubmitChange={handleSubmitChange}
            CheckLogin={CheckLogin}
            DarkMode={DarkMode}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <IcomeAndHistory
            CheckLogin={CheckLogin}
            handleSubmitAddMoney={handleSubmitAddMoney}
            dataIcome={dataIcome}
          />
        </Col>
      </Row>
    </div>
  );
}
