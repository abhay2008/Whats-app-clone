import React from "react";
import { auth, provider } from "../firebase";
import { Button } from "@material-ui/core";
import Head from "next/head";

function login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(console.error);
  };

  return (
    <div className="grid place-items-center dark:bg-gray-900 bg-indigo-100 h-screen">
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex flex-col items-center dark:bg-bgdarkSecondary bg-indigo-300 p-28 rounded-md shadow-md">
        <img
          className="h-52 w-52 mb-14"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt=""
        />
        <button
          className="w-full focus:outline-none py-2  rounded-lg dark:!bg-bgdarkSecondary bg-indigo-400 dark:!text-white"
          onClick={signIn}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default login;
