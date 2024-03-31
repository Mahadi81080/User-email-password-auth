import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRef = useRef(null);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    // Reset Error
    setLoginError("");
    setSuccess("");
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user.emailVerified) {
          setSuccess("Accout login successfully");
        }else{
          alert('Please verify your email address')
        }
      })
      .catch((error) => {
        console.error(error);
        setLoginError("Information not correct");
      });
  };
  const handleForgetPasword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log("Please provide an email", emailRef.current.value);
      return;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      console.log("please write a valid email");
      return;
    }
    // Send validatio email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("please check your email");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col  max-w-md p-6 shadow-lg rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm dark:text-gray-600">
              Sign in to access your account
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-12">
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm">Email address</label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm">Password</label>
                  <a
                    onClick={handleForgetPasword}
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-600"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <input
                  type="submit"
                  className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
                />
              </div>
              <p className="px-6 text-sm text-center dark:text-gray-600">
                Donot have an account yet?
                <Link
                  to="/register"
                  className="hover:underline dark:text-violet-600"
                >
                  Sign up
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
      {loginError && (
        <div>
          <p className="text-red-800">{loginError}</p>
        </div>
      )}
      {success && (
        <div>
          <p className="text-green-700">{success}</p>
        </div>
      )}
    </>
  );
};

export default Login;
