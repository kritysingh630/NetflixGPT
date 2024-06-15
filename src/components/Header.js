import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error")
      });
  };
  return (
    <div className="absolute w-screen px-12 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-40"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png"
        alt="Netflix-logo"
      ></img>
      <div className="flex w-12 h-12 p-1">
        <img
          alt="user-icon"
          src="https://occ-0-4487-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
        ></img>
        <button
          onClick={handleSignOut}
          className="text-xs px-4 font-bold text-white"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
