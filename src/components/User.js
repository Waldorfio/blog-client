function User(props) {
  const { user } = props;

  return (
    <div className="user">
      <h2>{user.username}</h2>
      <p>{user.password}</p>
    </div>
  );
}

export default User;
