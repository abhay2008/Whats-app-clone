import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import CreateIcon from "@material-ui/icons/Create";
import { useRouter } from "next/router";
import Head from "next/head";

function details() {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const signOut = () => {
    auth.signOut();
    router.replace("/");
  };

  return (
    <div className="bg-indigo-100 flex h-screen items-center justify-center px-16">
      <Head>
        <title>Your details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 -left-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob"></div>
        <div className="absolute top-0 -right-10 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob animation-delay-2000"></div>
        <div className="absolute left-20 -bottom-12 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob animation-delay-4000"></div>
        <div>
          <img
            className="w-60 ml-auto mr-auto h-60 relative flex flex-col m-5 rounded-full"
            src={user.photoURL}
            alt={user.displayName}
          />
          <div className="transform hover:scale-110 duration-300 delay-75 backdrop-filter backdrop-blur-2xl bg-white bg-opacity-25 shadow-xl rounded-xl relative  flex flex-col m-5 p-10  items-center cursor-pointer">
            <a
              className="flex items-center justify-center !text-lg"
              target="blank"
              href="https://myaccount.google.com/personal-info"
            >
              Your name <CreateIcon className="ml-2" />
            </a>
            <h1>{user.displayName}</h1>
          </div>
          <div className="transform hover:scale-110 duration-300 delay-75 backdrop-filter backdrop-blur-2xl bg-white bg-opacity-25 shadow-xl rounded-xl relative flex flex-col m-5 p-10 items-center cursor-pointer">
            <a
              target="blank"
              className="flex items-center justify-center !text-lg"
              href="https://myaccount.google.com/personal-info"
            >
              Your email
              <CreateIcon className="ml-2" />
            </a>
            <h1 className="text-lg">{user.email}</h1>
          </div>
          <div className="transform hover:scale-110 duration-300 delay-75 backdrop-filter backdrop-blur-2xl bg-white bg-opacity-25 shadow-xl rounded-xl relative flex flex-col m-5 p-10 items-center cursor-pointer">
            <button onClick={signOut} className="focus:outline-none">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default details;
