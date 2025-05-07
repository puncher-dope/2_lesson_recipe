import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const steps = data;
  const prev = () => {
    if (!isFirst) {
      setActiveIndex(prev => prev - 1)
    }
  }
  const next = () => {
    if (!isLast) {
      setActiveIndex(prev => prev + 1)
    }
  }
  const reset = () => {
    setActiveIndex(0)
  }

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === steps.length - 1
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles['steps-content']}>
            {steps[activeIndex].content}
          </div>

          <ul className={styles['steps-list']}>
            {/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}

            {steps.map((step, ind) => {
              const isDone = ind <= activeIndex
              const isActive = ind === activeIndex
              return (
                <li
                  className={`
                  ${styles['steps-item']}
                  ${isDone ? styles.done : ''}
                  ${isActive ? styles.active : ''}`}
                  key={step.id}>

                  <button
                    className={styles['steps-item-button']}
                    onClick={() => { setActiveIndex(ind) }}
                  >{ind + 1}</button>
                  {step.title}
                </li>)
            })}
          </ul>

          <div className={styles['buttons-container']}>
            <button
              className={styles.button}
              onClick={prev}
              disabled={isFirst}
            >Назад</button>
            {!isLast ?

              <button
                className={styles.button}
                onClick={next}
              >Далее</button> :

              <button
                className={styles.button}
                onClick={reset}
              >Сбросить</button>}

          </div>
        </div>
      </div>
    </div>
  );
};
