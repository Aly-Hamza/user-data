import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import styled from "styled-components";
import { removeUser } from "../store/slices/userslice";

const DisplayUsers = () => {
    const dispatch=useDispatch();
  const data = useSelector((state) => state.users);
  const deleteUser=(id)=>{
    dispatch(removeUser(id))


  }

  return (
    <UserList>
      {data.map((user, id) => (
        <UserItem key={id}>
          <span className="user-name">{user}</span>
          <DeleteButton className="btn-delete" onClick={()=>deleteUser()}>
            <MdDeleteForever className="delete-icon" />
          </DeleteButton>
        </UserItem>
      ))}
    </UserList>
  );
};

export default DisplayUsers;

// Styled Components
const UserList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const UserItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9f9f9;
  padding: 12px 15px;
  margin-bottom: 10px;
  border-radius: 6px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;

  .user-name {
    flex: 1; 
    font-weight: 500;
    margin-right: 15px;
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.3s ease;

  .delete-icon {
    font-size: 1.8rem;
    color: #ff4444;
    transition: color 0.3s ease;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:hover .delete-icon {
    color: #cc0000;
  }
`;
