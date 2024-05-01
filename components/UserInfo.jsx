"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function UserInfo() {
  const { data: session } = useSession();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div>
        <div
          onClick={handleDropdown}
          className="flex gap-2 hover:cursor-pointer items-center "
        >
          {session && (
            <div className="bg-gray-800 text-white h-10 w-10 flex items-center justify-center rounded-full">
              {session?.user?.name
                ? session.user.name.substring(0, 2).toUpperCase()
                : ""}
            </div>
          )}
          <div className="leading-3">
            <p className="">{session?.user?.name}</p>
            <p className="pt-1.5">{session?.user?.email}</p>
          </div>
        </div>
        {session && isDropdownOpen && (
          <div className="relative">
            <div
              onClick={() => signOut()}
              className="absolute bg-white hover:cursor-pointer text-sm hover:bg-gray-100 border-gray-100 rounded-lg w-44 border-2 text-gray-900 font-semibold px-4 py-2 mt-3"
              style={{ right: 0 }}
            >
              Log Out
            </div>
          </div>
        )}
      </div>
    </>
  );
}
