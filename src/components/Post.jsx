import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
  console.log(props);
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/RuanPerroni.png" />
          <div className={styles.authorInfo}>
            <strong>Ruan Perroní</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="09 de Maio às 08:13h" dateTime="2024-05-09 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}></div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}

//aula: Propriedades do post - segunda aula
