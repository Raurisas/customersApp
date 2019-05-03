import React from 'react';

const ListRow = ({ item, handleRowClick, handleRemoveClick, handleEditClick }) => {
  return (
    <div className="list-row" onClick={() => handleRowClick(item.id)}>
      <div className="info">
        <span>
          {item.metadata.fullName} ({item.email})
        </span>
      </div>
      <div className="actions">
        <div onClick={event => handleEditClick(item, event)}>EDIT</div>
        <div onClick={event => handleRemoveClick(item.id, event)}>REMOVE</div>
      </div>
    </div>
  );
};

export default ListRow;
