import { signInWithPopup } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./features/userSlice";
import { auth, provider } from "./firebase";

function AltSignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const joinWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      dispatch(
        login({
          email: result.user.email,
          uid: result.user.uid,
          photoUrl: result.user.photoURL,
          displayName: result.user.displayName,
        })
      );
      navigate("/");
    });
  };
  return (
    <div className="signin-alts">
      <p>or</p>
      <button onClick={joinWithGoogle}>Continue with Google</button>
    </div>
  );
}

export default AltSignIn;
