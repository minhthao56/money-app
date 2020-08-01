import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function HistortyADay(props) {
  const { data, handleSumForExpenseCard } = props;
  const DarkMode = useSelector((state) => state.DarkMode);
  const CheckLogin = useSelector((state) => state.CheckLogin);
  const sumDataADay = () => {
    const mapData = data.map((a) => {
      return a.amount;
    });
    const sumData = mapData.reduce((a, b) => {
      return a + b;
    }, 0);
    return handleSumForExpenseCard(sumData);
  };
  useEffect(() => {
    sumDataADay();
  }, [data]);
  return (
    <div>
      {data.map((d, k) => {
        return (
          <div className="container-price-card" key={k}>
            <div
              className={
                DarkMode
                  ? "category-icon category-expense-icon icon-card-expense dark-category-icon"
                  : "category-icon category-expense-icon icon-card-expense"
              }
            >
              <div className={"icon category-color" + d.color}>
                <i className={d.className}></i>
              </div>
              <span>{d.title}</span>
            </div>
            <span>
              {d.amount}
              {CheckLogin.data && CheckLogin.data.defaultCurrency}
            </span>
          </div>
        );
      })}
    </div>
  );
}
