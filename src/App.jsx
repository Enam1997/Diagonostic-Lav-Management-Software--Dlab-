import "./App.css";
import Sidebar from "./layout/sidebar/Sidebar";

function App() {
  return (
    <main className="main">
      <Sidebar />
      <div className="right-container">
        <h1 className="title">Right sight content</h1>
        <p className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, vitae
          voluptates, totam et maxime quae amet praesentium, porro esse harum
          ducimus libero dignissimos magni aliquam iusto obcaecati.
          Exercitationem, ad aspernatur.
        </p>
        <button className="btn">Explore</button>
      </div>
    </main>
  );
}
export default App;
