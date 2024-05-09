import { Post } from "./Post";
import { Header } from "./components/Header";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <Post author="Ruan Perroní" content="Fodaseeeeeeeeeeeee teste" />
      <Post author="Matheus Borges" content="Fodaseeeeeeeeeeeee teste" />
    </div>
  );
}
