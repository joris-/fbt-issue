import React, { useState } from 'react';

import fbt, { IntlViewerContext, init } from 'fbt';
init({ translations: require('../translatedFbts.json') });

IntlViewerContext.locale = "es_LA";

const useLanguageSwitch = (): [string, () => void] => {
    const [currentLocale, setlocale] = useState('es_LA')

    const switchLanguage = () => {
        const locale = currentLocale === "es_LA" ? 'en_US' : "es_LA";

        IntlViewerContext.locale = locale;
        setlocale(locale);
    }

    return [currentLocale, switchLanguage];
}

/*
  Uncomment one by one these case and observe :)
*/

//////////////////////////////////////////////////////////////////////////


{/* 
    CASE 1 - Working
    Both translated texts are displayed ('Sign up button' & 'Gender Select label')
*/}
const App = () => {
    const [currentLocale, switchLanguage] = useLanguageSwitch();

    return (
        <>
            <h1>Locale : {currentLocale}</h1>
            <button type="button" onClick={switchLanguage}>Switch language</button>

            <h1>{fbt('Try it out!', 'Sign up button')}</h1>
            {/* 
            // Should be fixed later
            // @ts-ignore */}
            <fbt desc="Gender Select label">Gender:</fbt>
        </>
    )
}

export default App;


//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////


{/* 
    CASE 2 - Working
    Translated text is displayed ('Sign up button')
*/}
// const App2 = () => {
//     const [currentLocale, switchLanguage] = useLanguageSwitch();

//     return (
//         <>
//             <h1>Locale : {currentLocale}</h1>
//             <button type="button" onClick={switchLanguage}>Switch language</button>

//             <h1>{fbt('Try it out!', 'Sign up button')}</h1>
//         </>
//     )
// }

// export default App2;


//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////


{/* 
    CASE 3 - Not Working
    An error is throw error `fbt is not bound. Did you forget to require('fbt')`
*/}
// const App3 = () => {
//     const [currentLocale, switchLanguage] = useLanguageSwitch();

//     return (
//         <>
//             <h1>Locale : {currentLocale}</h1>
//             <button type="button" onClick={switchLanguage}>Switch language</button>

//             {/* Case 2 - Not Working, throw an error */}
//             {/* 
//             // Should be fixed later
//             // @ts-ignore */}
//             <fbt desc="Gender Select label">Gender:</fbt>
//         </>
//     )
// }

// export default App3;
