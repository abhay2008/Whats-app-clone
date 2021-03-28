import { Avatar, Button, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styled from "styled-components";
import { useRouter } from "next/router";

function Users() {
  const router = useRouter();

  const [users, setUsers] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      setUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <Container>
      <Header>
        <IconButton onClick={() => router.push("/")}>
          <ArrowBackIcon style={{ color: "white" }} />
        </IconButton>
      </Header>
      {users.map(({ id, data: { name, email, photoURL } }) => (
        <UsersList>
          <UserAvatar src={photoURL} />
          <UserDetails>
            <UserEmail>{email}</UserEmail>
            <UserName>{name}</UserName>
          </UserDetails>
        </UsersList>
      ))}
    </Container>
  );
}

export default Users;

const Container = styled.div`
  flex: 0.45;
  border-right: 1px solid whitesmoke;
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
  background-color: #00bfa5;
`;

const UsersList = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  :hover {
    background-color: #e9eaeb;
  }
  margin-left: 10px;
`;

const UserDetails = styled.div`
  display: flex;
  cursor: pointer;
  word-break: break-word;
  flex-direction: column;
  margin-left: 10px;
`;

const UserAvatar = styled(Avatar)`
  align-items: flex-start;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const UserEmail = styled.div``;
const UserName = styled.div``;
