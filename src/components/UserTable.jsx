import UserItem from "./UserItem";

const UserTable = ({ tasks, deleteUser, onCompleted }) => {
  return (
    <UserItem tasks={tasks} deleteUser={deleteUser} onCompleted={onCompleted} />
  );
};

export default UserTable;
