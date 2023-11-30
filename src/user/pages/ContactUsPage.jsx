import { useState } from "react";
import { database } from "../../auth/firebase/firebase";

export function ContactUsPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const Push = () => {
    database
      .ref("user")
      .set({
        name: name,
        age: age,
        message: message,
      })
      .catch(alert);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div
          className="bg-white p-8 rounded shadow-lg"
          style={{ backgroundColor: "#F3F3F3" }}
        >
          <div className="flex">
            <div className="w-1/4 pr-4">
              <img
                className="w-full h-auto"
                src="/imgs/Login-name.png"
                alt="Contact us"
              />
            </div>

            <div className="w-3/4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name:
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email:
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Message:
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded h-24"
                  type="text"
                  id="message"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              className=" text-white py-2 px-4 rounded hover:bg-blue-600"
              style={{ backgroundColor: "#8B96FE" }}
              onClick={Push}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
