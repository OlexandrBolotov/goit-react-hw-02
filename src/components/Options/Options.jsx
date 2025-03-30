import styles from './Options.module.css';

const Options = ({ onLeaveFeedback, onReset, totalFeedback }) => {
  return (
    <div className={styles.options}>
          <button className={styles.options__button} onClick={() => onLeaveFeedback('good')}>Good</button>
      <button className={styles.options__button} onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
          <button className={styles.options__button}  onClick={() => onLeaveFeedback('bad')}>Bad</button>
           {totalFeedback > 0 && (
        <button className={styles.options__button}  onClick={onReset}>Reset</button>
      )}
    </div>
  );
};

export default Options;
   