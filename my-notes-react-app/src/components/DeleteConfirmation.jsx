const Popup = ({ handleDeleteTrue, handleDeleteFalse }) => {
    return (
      <div className="modal">
        <div className="modal_box">
          <p>Are you sure to delete this item?</p>
          <button className="modal_buttonCancel" onClick={handleDeleteFalse}>
            Cancel
          </button>
          <button onClick={handleDeleteTrue} className="modal_buttonDelete">
            Confirm
          </button>
        </div>
      </div>
    );
  };
  
  export default Popup;
  