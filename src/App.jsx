import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [value, setValue] = useState('Jam');

  const message = !value
    ? `No goods selected`
    : `${value} is selected`;

  const handleSelectGood = good => {
    setValue(good);
  }

  const clearSection = () => {
    setValue('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {message}
        {value && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearSection}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => (
            <tr
              key={good}
              data-cy="Good"
              className={classNames({
                'has-background-success-light': value === good,
              })}
            >
            <td>
              {value !== good && (
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={() => handleSelectGood(good)}
                >
                  +
                </button>
              )}

              {value === good && (
                <button
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                  onClick={clearSection}
                >
                  -
                </button>
              )}
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              {good}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </main>
  );
};
