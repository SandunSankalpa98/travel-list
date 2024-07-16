import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

export default function PackingList({items, onDeleteItem}) {
    return (
      <div className="list">
        <ul>
            {items.map((item) => (
            <Item
                item={item}
                key={item.id}
                onDeleteItem={onDeleteItem}
            />
            ))}
        </ul>
      </div>
    )
  }

PackingList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            // Define other properties of item if needed
        })
    ).isRequired,
    onDeleteItem: PropTypes.func.isRequired,
};
