import React from 'react';
import ListRow from './ListRow';

const ListTable = ({ items, handleRowClick, handleRemoveClick, handleEditClick }) => {
  return (
    <div className="list-table">
      {items.map(item => (
        <ListRow
          item={item}
          key={item.id}
          handleRowClick={handleRowClick}
          handleRemoveClick={handleRemoveClick}
          handleEditClick={handleEditClick}
        />
      ))}
    </div>
  );
};

export default ListTable;
