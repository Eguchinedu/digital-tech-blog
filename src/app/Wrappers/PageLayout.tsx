import { ReactNode } from "react";
import NavBar from "../components/navigation/NavBar";
import Footer from "../components/navigation/Footer";


type PageLayoutProps = {
  children: ReactNode;
};
export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
