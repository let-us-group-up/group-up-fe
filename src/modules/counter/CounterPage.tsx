import { useState } from 'react';
import { useIntl } from '@libs/intl';

const CounterPage: React.VFC = () => {
  const intl = useIntl();
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        type="button"
        disabled={count <= 0}
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <button
        type="button"
        disabled={count >= 10}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
      <br />
      {intl.formatMessage({
        defaultMessage: `
        You have {itemCount, plural,
          =0 {no items}
          one {1 item}
          other {{itemCount} items}
        }.
      `,
        description: 'Plural',
      }, { itemCount: count })}
    </>
  );
};

export default CounterPage;
