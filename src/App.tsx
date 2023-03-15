import NavBar from "./components/nav-bar/Navbar";
import { LargeCard, BaseCard } from "./components/card";

import "./index.css";

function App() {
  return (
    <div className="main">
      <header>
        <NavBar />
      </header>
      <div>
        <LargeCard />
        <div>
          <BaseCard defaultPost={{ x: 400, y: 600 }} title="News">
            <div style={{ width: "300px" }}>drag me</div>
          </BaseCard>
        </div>
      </div>
    </div>
  );
}

export default App;
