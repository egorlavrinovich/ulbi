import { render } from 'react-dom';
import './app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';
import './shared/config/i18n/i18n';

render(
    <StoreProvider>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root'),
);
