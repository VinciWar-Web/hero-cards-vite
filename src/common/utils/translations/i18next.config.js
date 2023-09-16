import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import globalSpanish from '../translations/es/global.json'
import globalEnglish from '../translations/en/global.json'

const detectionOptions = { order: ['navigator'] }

i18n.use(detector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'es',
        interpolation: { escapeValue: false },
        detection: detectionOptions,
        react: { useSuspense: false },
        resources: {
            es: {
                global: globalSpanish,
            },
            en: {
                global: globalEnglish,
            },
        },
    })

export default i18n
