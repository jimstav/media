import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { useThunk } from "../hooks/useThunk";
import { removeUser } from "../store";

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <Button loading={isLoading} onClick={handleClick}>
          <GoTrashcan />
        </Button>
        {error && <div>Error deleting user: {error.message}</div>}
        {user.name}
      </div>
    </div>
  );
}

export default UsersListItem;
