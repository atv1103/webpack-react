import { lazy } from "react";

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    //@ts-expect-ignore
    setTimeout(() => resolve(import('./MainPage')), 1500)
})) 