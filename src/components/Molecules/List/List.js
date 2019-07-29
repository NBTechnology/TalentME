import React from "react";
import Text from "components/Atoms/Text/Text";
import { Link } from "react-router-dom";

const List = props => {
  console.log(props.items);
  const items = props.items.map(item => {
    if (item.link !== undefined) {
      return (
        <Link to={item.link} style={{ textDecoration: "none" }}>
          <Text variant="customize" color="#9FA3A7" margin="12px 0 0 0">
            {item.label}
          </Text>
        </Link>
      );
    } else {
      return (
        <Text variant="customize" color="#9FA3A7" margin="12px 0 0 0">
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
