import s from './app.module.css';
import data from './data.json';
import { useState } from 'react';
import { initializeSteps } from './StepUtils.js';

export const App = () => {
  const [steps] = useState(initializeSteps(data));
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    if (!isStepOnStart) setActiveIndex(activeIndex - 1);
  };

  const handleStepForward = () => {
    if (isStepOnEnd) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  let isStepOnStart = activeIndex === 0;
  let isStepOnEnd = activeIndex === steps.length - 1;

  const handleStepClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={s.container}>
      <div className={s.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={s.steps}>
          <div className={s['steps-content']}>
            {steps[activeIndex].content}
          </div>
          <ul className={s['steps-list']}>
            {
              steps.map((step, index) => (
                <li
                  className={s['steps-item'] + ' ' + (index <= activeIndex ? s.done : '') + ' ' + (index === activeIndex ? s.active : '')}
                  key={step.id}>
                  <button className={s['steps-item-button']} onClick={() => handleStepClick(index)}>{index + 1}</button>
                  {step.title}
                </li>))
            }
          </ul>
          <div className={s['buttons-container']}>
            <button className={s.button} onClick={handlePrevious} disabled={isStepOnStart}>Назад</button>
            <button className={s.button} onClick={handleStepForward}>
              {isStepOnEnd ? 'Начать сначала' : 'Далее'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
