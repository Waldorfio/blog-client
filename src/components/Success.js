function Success(props) {
  const { successMsg } = props;

  return (
    <div className="success-popup">
        <div className="tick"><i className="material-icons">&#xE876;</i></div>
        <h4 className="success-msg">{successMsg}</h4>
    </div>
  );
}

export default Success;
