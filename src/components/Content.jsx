

import styles from '../app.module.css';

export default function Content() {

  return (<>

    {data.map(({ id, content }) => {
      return <div className={styles['steps-content']} key={id}>{content}</div>
    })}
  </>


  )
}