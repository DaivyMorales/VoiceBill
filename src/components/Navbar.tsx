import React, { type ReactNode } from "react";
import { FaDollarSign } from "react-icons/fa6";

function Navbar({ children }: { children: ReactNode }) {
  return (
    <main className="w-screen min-h-screen">
      <header className="w-full flex justify-center py-5">
        <div className="-gap-1 flex items-center">
          <FaDollarSign size={22} className="rotate-[-10deg] text-green-500" />{" "}
          <h3>VoiceBill</h3>
        </div>
      </header>
      {children}
    </main>
  );
}

export default Navbar;
