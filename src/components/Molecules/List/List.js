import React from "react";
import Text from "components/Atoms/Text/Text";
import { Link } from "react-router-dom";

const List = props => {
  // console.log(props.items);
  const items = props.items.map(item => {
    if (item.link !== undefined) {
      if (item.icon !== undefined) {
        return (
          <Link
            to={item.link}
            style={{ textDecoration: "none", color: "#fff" }}
            key={item.id}
          >
            {item.icon}
          </Link>
        );
      } else {
        return (
          <Link to={item.link} style={{ textDecoration: "none" }} key={item.id}>
            <Text variant="customize" color="#9FA3A7" margin="12px 0 0 0">
              {item.label}
            </Text>
          </Link>
        );
      }
    } else {
      return (
        <Text
          variant="customize"
          color="#9FA3A7"
          margin="12px 0 0 0"
          key={item.id}
        >
          {item.label}
        </Text>
      );
    }
  });
  return (
    <div>
      <Text variant="customize" isBold color="#fff">
        {props.title}
      </Text>
      {items}
    </div>
  );
};

export default List;
