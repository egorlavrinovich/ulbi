import Button, { ThemeButton } from 'shared/Button/ui/Button';
import { render, screen } from '@testing-library/react';

describe('Button tests', () => {
    test('Is render Button', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('add clear class', () => {
        render(<Button theme={ThemeButton.CLEAR}>Text</Button>);
        expect(screen.getByText('Text')).toHaveClass('clear');
        screen.debug();
    });
});
