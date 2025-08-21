import { useState } from "react";
import "./App.css";

function App() {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/user/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      alert(data.msg || data.error);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      alert(data.msg || data.error);

      if (res.ok) {
        setIsSignup(false);
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="border-2 h-auto w-130 rounded-2xl bg-gray-300 flex flex-col items-center p-8">
        <h1 className="font-bold text-2xl mb-6">
          {isSignup ? "Signup Authentication" : "Login Authentication"}
        </h1>

        <form onSubmit={isSignup ? handleSignup : handleLogin} className="w-full flex flex-col items-center">
          {isSignup && (
            <div className="flex flex-col items-center mb-6">
              <label htmlFor="name" className="font-bold text-xl mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border font-semibold rounded h-10 w-60 p-2"
                placeholder="Enter Your Name"
                required
              />
            </div>
          )}

          <div className="flex flex-col items-center mb-6">
            <label htmlFor="email" className="font-bold text-xl mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border font-semibold rounded h-10 w-60 p-2"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="flex flex-col items-center mb-6">
            <label htmlFor="password" className="font-bold text-xl mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border font-semibold rounded h-10 w-60 p-2"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 border rounded-2xl w-28 p-2 bg-blue-300 hover:bg-blue-400 duration-300 font-bold"
          >
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>

        <p className="mt-4">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-blue-600 underline"
          >
            {isSignup ? "Login" : "Signup"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;
