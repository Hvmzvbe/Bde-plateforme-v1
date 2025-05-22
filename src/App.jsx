import About from "./components/About";
import NavBar from "./components/Navbar";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Bde from "./components/Bde.jsx";
import Future from "./components/Future.jsx";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Bde />
      <About />
      <Future />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
