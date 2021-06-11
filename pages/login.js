import React from "react";
import { auth, provider } from "../firebase";
import { Button } from "@material-ui/core";
import Head from "next/head";

function login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(console.error);
  };

  return (
    <div className="grid place-items-center bg-gray-900 h-screen">
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex flex-col items-center bg-gray-800 p-28 rounded-md shadow-md">
        <img
          className="h-52 w-52 mb-14"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt=""
        />
        <Button
          className="!bg-gray-900 !text-white focus:outline-none"
          onClick={signIn}
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}

export default login;
