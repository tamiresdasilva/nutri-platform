import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";
import { ChatProvider } from "./context/ChatContext";
import { ScheduleProvider } from "./context/ScheduleContext";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ChatProvider>
          <ScheduleProvider>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </ScheduleProvider>
        </ChatProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
