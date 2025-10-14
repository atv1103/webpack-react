import { Story } from "@storybook/react-webpack5";
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (story: () => Story) =>  (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
