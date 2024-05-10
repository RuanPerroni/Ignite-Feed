import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Ruan Perroní" content="Fodaseeeeeeeeeeeee teste" />
          <Post author="Matheus Borges" content="Fodaseeeeeeeeeeeee teste" />
        </main>
      </div>
    </div>
  );
}
