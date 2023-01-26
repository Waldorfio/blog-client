function User(props) {
  const { username, password } = props;

  return (
    <div className="user">
      <h2>{username}</h2>
      <p>{password}</p>
    </div>
  );
}

export default User;
