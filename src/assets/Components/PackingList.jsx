import React, { useState } from "react";
import PropTypes from "prop-types";
import Item from "./Item";

export default function PackingList({items, onDeleteItem, onToggleItem}) {
    const [sortBy, setSortBy] = useState("input")

    let sortedItems;
    if(sortBy === 'input') sortedItems = items;
    if(sortBy === 'description') sortedItems = items
        .slice()
        .sort((a,b) => a.description.localeCompare(b.description));
    if(sortBy === 'packed') sortedItems = items
        .slice()
        .sort((a,b) => Number(a.packed) - Number(b.packed));

    return (
      <div className="list">
        
        <ul>
            {sortedItems.map((item) => (
            <Item
                item={item}
                key={item.id}
                onDeleteItem={onDeleteItem}
                onToggleItem={onToggleItem}
            />
            ))}
        </ul>

        <div className="action">
            <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} >
                <option value="input">Sort by input order</option>
                <option value="description">Sort by description</option>
                <option value="packed">Sort by packed status</option>
            </select>
        </div>
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
    onToggleItem: PropTypes.func.isRequired,
};
