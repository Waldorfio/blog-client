import React from 'react';

function Success(props) {
  const { showPopup, setShowPopup, popupMsg } = props;

  return (
    showPopup === true ? ( // If show popup equals true
      <div className="success-popup">
        <div className="tick"><i className="material-icons">&#xE876;</i></div>
        <h4 className="success-msg">{popupMsg}</h4>
      </div>
    ) : null
  );
}

export default Success;
