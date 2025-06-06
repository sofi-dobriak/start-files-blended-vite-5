import Select from 'react-select';
import symbols from './symbols.json';
import styles from './SelectRates.module.css';
import './ReactSelect.css';
import { useDispatch } from 'react-redux';
import { setBaseCurrency } from '../../reduxState/currency/currencySlice';

const SelectRates = ({ value }) => {
  const dispatch = useDispatch();

  const handleChangeSelect = selectOption => {
    dispatch(setBaseCurrency(selectOption.value));
  };

  return (
    <div className={styles.box}>
      <p className={styles.text}>Your base currency:&nbsp;</p>
      <Select
        className={styles.select}
        classNamePrefix="react-select"
        value={{ label: value, value: value }}
        options={symbols}
        isSearchable
        onChange={handleChangeSelect}
      />
    </div>
  );
};

export default SelectRates;
