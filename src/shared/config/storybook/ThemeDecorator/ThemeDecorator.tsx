import 'app/styles/index.scss';
import {
    Theme,
    ThemeContext,
} from 'shared/config/theme/ThemeContext';

export const ThemeDecorartor = (theme: Theme) => (StoryComponent: any) => (
    <ThemeContext.Provider value={{ theme }}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeContext.Provider>
);
