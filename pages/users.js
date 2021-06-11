import { Avatar, Button, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useRouter } from "next/router";
import * as EmailValidator from "email-validator";
import { useCollection } from "react-firebase-hooks/firestore";

function Users() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [user] = useAuthState(auth);

  const userChatsRef = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatsSnapshot, loading] = useCollection(userChatsRef);

  useEffect(() => {
    db.collection("users")
      .orderBy("name")
      .onSnapshot((snapshot) =>
        setUsers(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const createChat = (input) => {
    if (!input) return;
    if (
      EmailValidator.validate(input) &&
      !chatAlreadyExist(input) &&
      input !== user.email
    ) {
      db.collection("chats").add({
        users: [user.email, input],
      });
    }
  };

  const chatAlreadyExist = (recipientEmail) =>
    !!chatsSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === recipientEmail)?.length > 0
    );

  return (
    <div className="border-r-[1px] border-gray-700 h-screen min-w-[300px] max-w-[400px] overflow-y-scroll hidescrollbar">
      <div className="flex sticky top-0 justify-between items-center p-4 h-20 bg-gray-800 border-b-[1px] border-gray-700">
        <IconButton
          className="focus:outline-none"
          onClick={() => router.push("/")}
        >
          <ArrowBackIcon style={{ color: "white" }} />
        </IconButton>
      </div>
      {users.map(({ data: { name, email, photoURL } }) => (
        <div
          className="cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            createChat(email);
          }}
        >
          {email === user.email ? (
            <div></div>
          ) : (
            <div className="flex items-center p-5 break-words bg-gray-800 text-white hover:bg-gray-900">
              <Avatar
                className="cursor-pointer hover:opacity-80"
                src={photoURL}
              />
              <div
                className="flex cursor-pointer break-words flex-col ml-3"
                onClick={() => {
                  router.push("/");
                  alert("Chat created successfully");
                }}
              >
                <p>{name}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Users;
