import { type AppType } from "next/app";
import { Geist, DM_Serif_Display } from "next/font/google";

import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({
  subsets: ["latin"],
});

const ptSans = DM_Serif_Display({
  subsets: ["latin"],
  weight: ['400'],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={ptSans.className}>
      <Navbar>
      <Component {...pageProps} />
      </Navbar>
    </div>
  );
};

export default MyApp;
