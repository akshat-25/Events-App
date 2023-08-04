import React, { useRef } from "react";
import Button from "../ui/Button";
import classes from "./EventsSearch.module.css";

const EventsSearch = (props) => {
  const months = [
    {
      val: 1,
      mth: "January",
    },
    {
      val: 2,
      mth: "February",
    },
    {
      val: 3,
      mth: "March",
    },
    {
      val: 4,
      mth: "April",
    },
    {
      val: 5,
      mth: "May",
    },
    {
      val: 6,
      mth: "June",
    },
    {
      val: 7,
      mth: "July",
    },
    {
      val: 8,
      mth: "August",
    },
    {
      val: 9,
      mth: "September",
    },
    {
      val: 10,
      mth: "October",
    },
    {
      val: 11,
      mth: "November",
    },
    {
      val: 12,
      mth: "December",
    },
  ];

  function submitHandler(event) {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  }

  const yearInputRef = useRef();
  const monthInputRef = useRef();
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            {months.map((item) => {
              return (
                <option value={item.val} key={item.val}>
                  {item.mth}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};

export default EventsSearch;
