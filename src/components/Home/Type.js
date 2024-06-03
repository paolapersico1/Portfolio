import React from "react";
import Typewriter from "typewriter-effect";
import { useIntl } from 'react-intl'; 

function Type() {
  const intl = useIntl();
  return (
    <Typewriter
      options={{
        strings: [
          intl.formatMessage({ id: 'softwaredeveloper' }),
          intl.formatMessage({ id: 'techenthusiast' }),
          intl.formatMessage({ id: 'tinkerer' }),
          intl.formatMessage({ id: 'contributor' }),
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
