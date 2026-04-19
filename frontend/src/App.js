import { useState, useEffect } from "react";
import "./App.css";
import Entry from "./components/Entry";
import Solutions from "./components/Solutions";
import Providers from "./components/Providers";
import Schemes from "./components/Schemes";
import Pathway from "./components/Pathway";
import Dashboard from "./components/Dashboard";
import { BottomNav } from "./components/Shared";

const STORAGE_KEY = "compass.state.v1";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore quota / private mode */
  }
}

function App() {
  const initial = loadState();
  const [screen, setScreen] = useState(initial?.screen || "entry");
  const [context, setContext] = useState(
    initial?.context || { hazard: null, role: null, geo: null }
  );
  const [pathway, setPathway] = useState(initial?.pathway || []);

  useEffect(() => {
    saveState({ screen, context, pathway });
  }, [screen, context, pathway]);

  const handleReset = () => {
    setScreen("entry");
    setContext({ hazard: null, role: null, geo: null });
    setPathway([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="App font-sans" data-testid="app-root">
      {screen === "entry" && (
        <Entry
          onComplete={(ctx) => {
            setContext(ctx);
            setScreen("solutions");
          }}
        />
      )}
      {screen === "solutions" && (
        <Solutions
          context={context}
          pathway={pathway}
          setPathway={setPathway}
          onNavigate={setScreen}
          onReset={handleReset}
        />
      )}
      {screen === "providers" && <Providers context={context} onReset={handleReset} />}
      {screen === "schemes" && (
        <Schemes
          context={context}
          pathway={pathway}
          setPathway={setPathway}
          onReset={handleReset}
        />
      )}
      {screen === "pathway" && (
        <Pathway
          context={context}
          pathway={pathway}
          setPathway={setPathway}
          onReset={handleReset}
        />
      )}
      {screen === "dashboard" && <Dashboard />}

      {screen !== "entry" && (
        <BottomNav screen={screen} setScreen={setScreen} pathwayCount={pathway.length} />
      )}
    </div>
  );
}

export default App;
