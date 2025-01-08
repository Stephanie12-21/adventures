import Header from "@/components/Sections/Header";
import Footer from "@/components/Sections/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
