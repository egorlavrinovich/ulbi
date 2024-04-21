import 'app/styles/index.scss';
import { BrowserRouter, Routes } from 'react-router-dom';

export const ProviderDecorator = (StoryComponent: any) => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
);
