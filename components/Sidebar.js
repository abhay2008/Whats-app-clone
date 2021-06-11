import { Avatar, Button, IconButton } from "@material-ui/core";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DonutLargeRoundedIcon from "@material-ui/icons/DonutLargeRounded";
import SearchIcon from "@material-ui/icons/Search";
import Chat from "./Chat";
import { useCollection } from "react-firebase-hooks/firestore";
import * as EmailValidator from "email-validator";
import { useRouter } from "next/router";
import { PersonOutline } from "@material-ui/icons";

function Sidebar() {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const userChatsRef = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(userChatsRef);

  const createChat = () => {
    const input = prompt(
      "Please enter an email address for the user you wish to chat with"
    );

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
    <div className="border-r-[1px] w-[380vw] border-gray-700 h-screen min-w-[300px] max-w-[400px] overflow-y-scroll hidescrollbar">
      <div className="flex sticky top-0 justify-between items-center p-4 h-20 bg-gray-800 border-b-[1px] border-gray-700 z-10">
        <Avatar
          className="cursor-pointer hover:opacity-80"
          onClick={() => auth.signOut()}
          src={user.photoURL}
        />

        <div>
          <IconButton className="focus:outline-none">
            <DonutLargeRoundedIcon className="!text-gray-50" />
          </IconButton>
          <IconButton
            className="focus:outline-none"
            onClick={() => router.push("/users")}
          >
            <PersonOutline className="!text-gray-50" />
          </IconButton>
          <IconButton className="focus:outline-none">
            <MoreVertIcon className="!text-gray-50" />
          </IconButton>
        </div>
      </div>

      <div className="flex items-center justify-center bg-gray-800 p-3 border-b-[1px] border-gray-700">
        <div className="flex items-center justify-center backdrop-filter backdrop-blur-2xl bg-white bg-opacity-10 rounded-3xl p-3 w-80">
          <SearchIcon className="!text-gray-50" />
          <input
            className="outline-none border-none text-white flex-1 ml-3 bg-transparent"
            placeholder="Search in chats"
            type="text"
          />
        </div>
      </div>

      <Button className="w-full !bg-gray-800 !text-white" onClick={createChat}>
        Start a new chat
      </Button>

      {/* Components */}
      <div className="bg-gray-800 border-t-[1px] !border-gray-700  min-h-screen">
        {chatsSnapshot?.docs.map((chat) => (
          <Chat key={chat.id} id={chat.id} users={chat.data().users} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
