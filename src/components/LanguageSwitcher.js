// LanguageSwitcher.js
import React from 'react';
import { useIntl } from 'react-intl';
import itFlag from '../assets/italian-flag.webp';
import enFlag from '../assets/english-flag.webp';

const LanguageSwitcher = ({ currentLocale, onChange }) => {
  const intl = useIntl();

  return (
     <div className="dropdown">
      <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {currentLocale === 'en' ? <img src={enFlag} alt="English" /> : <img src={itFlag} alt="Italian" />}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <button className="dropdown-item" onClick={() => onChange('en')}>
          <img src={enFlag} alt={intl.formatMessage({ id: 'english' })} /> English
        </button>
        <button className="dropdown-item" onClick={() => onChange('it')}>
          <img src={itFlag} alt={intl.formatMessage({ id: 'italian' })} /> Italiano
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;