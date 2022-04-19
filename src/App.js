import Header from "./components/Header";
import "./css/base.css";
import "./css/media.css";
import ScrollTop from "./components/ScrollTop";
import Home from "./components/Home";
import Share from "./components/Share";
import Decorations from "./components/Decorations";
import Accessory from "./components/Accessory";
import SendGift from "./components/SendGift";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <ScrollTop />
      <Header></Header>
      <main className="l-main">
        <Home></Home>
        <Share></Share>
        <Decorations></Decorations>
        <Accessory></Accessory>
        <SendGift></SendGift>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
