import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { BrowserRouter as Router } from "react-router-dom"

// Global State
import AuthContextProvider from "./lib/store/AuthContext"
import ProfileContextProvider from "./lib/store/ProfileContext"
import TimelineContextProvider from "./lib/store/TimelineContext"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <TimelineContextProvider>
      <AuthContextProvider>
        <ProfileContextProvider>
          <App />
        </ProfileContextProvider>
      </AuthContextProvider>
    </TimelineContextProvider>
  </Router>
)
