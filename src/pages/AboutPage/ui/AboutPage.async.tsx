import { lazy } from 'react'

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    //@ts-expect-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1500)
})) 