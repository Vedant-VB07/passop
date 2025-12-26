import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const ref = useRef();
  const passwordRef = useRef();

  const showPassword = () => {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
      ref.current.src = "/eyecross.png";
    } else {
      passwordRef.current.type = "password";
      ref.current.src = "/eye.png";
    }
  };

  const savePassword = () => {
    if (form.site && form.username && form.password) {
      const newPassword = { ...form, id: uuidv4() };
      const updated = [...passwordArray, newPassword];
      setpasswordArray(updated);
      localStorage.setItem("passwords", JSON.stringify(updated));
      setform({ site: "", username: "", password: "" });
    } else {
      alert("Please fill all the fields!!");
    }
  };

  const deletePassword = (id) => {
    const updated = passwordArray.filter((item) => item.id !== id);
    setpasswordArray(updated);
    localStorage.setItem("passwords", JSON.stringify(updated));
  };

  const editPassword = (id) => {
    const selected = passwordArray.find((i) => i.id === id);
    setform(selected);
    deletePassword(id);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* MAIN CONTENT */}
      <div className="pt-16 pb-6 text-green-400 flex justify-center px-2 sm:px-0">
        <div className="max-w-4xl w-full">
          <h1 className="text-xs sm:text-sm mx-auto text-green-300 mb-2 mt-2 flex justify-center py-2 bg-black rounded-2xl w-fit px-4">
            Your Password Manager
          </h1>

          {/* FORM CARD */}
          <div className="flex flex-col items-center gap-3 bg-black/80 border border-green-500/20 rounded-xl p-3 shadow-lg shadow-green-500/10">
            <input
              value={form.site}
              name="site"
              onChange={handleChange}
              type="text"
              placeholder="Website / App Name"
              className="w-full bg-black border border-green-500/30 rounded-lg px-3 py-1.5 text-sm sm:text-base text-green-400 placeholder-green-500/40 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition"
            />

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                value={form.username}
                name="username"
                onChange={handleChange}
                type="text"
                placeholder="Username / Email"
                className="w-full sm:flex-1 bg-black border border-green-500/30 rounded-lg px-3 py-1.5 text-sm sm:text-base text-green-400 placeholder-green-500/40 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition"
              />

              <div className="flex relative w-full sm:flex-1">
                <input
                  ref={passwordRef}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                  className="w-full bg-black border border-green-500/30 rounded-lg px-3 py-1.5 text-sm sm:text-base text-green-400 placeholder-green-500/40 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition"
                />
                <span
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer bg-green-700 rounded-md p-1"
                  onClick={showPassword}
                >
                  <img ref={ref} src="/eye.png" className="w-4" alt="eye" />
                </span>
              </div>
            </div>

            <button
              onClick={savePassword}
              className="bg-green-500/10 border border-green-500/40 text-green-300 px-4 py-1 rounded-lg hover:bg-green-500/20 hover:text-green-200 transition text-sm sm:text-base"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      {/* TABLE SECTION */}
      <div className="passwordtable flex justify-center pb-16 px-2 sm:px-0 overflow-x-auto">
        {passwordArray.length === 0 && (
          <div className="text-green-400 text-sm">No passwords to display.</div>
        )}

        {passwordArray.length !== 0 && (
          <table className="table-auto min-w-[640px] border-2 border-green-500/20 rounded-lg overflow-hidden bg-black/80 text-green-300 shadow-lg shadow-green-500/10 text-sm sm:text-base">
            <thead className="bg-green-500/10 text-green-400">
              <tr>
                <th className="px-4 py-2 text-left border-b border-green-500/20">Website/App</th>
                <th className="px-4 py-2 text-left border-b border-green-500/20">Username</th>
                <th className="px-4 py-2 text-left border-b border-green-500/20">Password</th>
                <th className="px-4 py-2 text-left border-b border-green-500/20">Actions</th>
              </tr>
            </thead>
            <tbody>
              {passwordArray.map((item) => (
                <tr key={item.id} className="hover:bg-green-500/5 transition">
                  <td className="px-4 py-2">
                    <a href={item.site} target="_blank" rel="noreferrer">
                      {item.site}
                    </a>
                  </td>
                  <td className="px-4 py-2">{item.username}</td>
                  <td className="px-4 py-2">
                    {"*".repeat(item.password.length)}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span onClick={() => editPassword(item.id)} className="cursor-pointer mr-2">
                      <lord-icon src="https://cdn.lordicon.com/vysppwvq.json" trigger="hover"></lord-icon>
                    </span>
                    <span onClick={() => deletePassword(item.id)} className="cursor-pointer">
                      <lord-icon src="https://cdn.lordicon.com/tftntjtg.json" trigger="hover"></lord-icon>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Manager;
