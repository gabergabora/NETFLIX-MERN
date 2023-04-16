import React from "react";
import "./List.scss";
import { ArrowBackIosOutlined } from "@mui/icons-material";
import ListItem from "../ListItem/ListItem";

const List = () => {
  return (
    <div className="list">
      <span className="listTitle"> Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined />
        <div className="container">
          <ListItem />
        </div>
        <ArrowBackIosOutlined />
      </div>
    </div>
  );
};

export default List;
