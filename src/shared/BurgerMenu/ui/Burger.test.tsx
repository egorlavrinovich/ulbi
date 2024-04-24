import { render, screen } from '@testing-library/react';
import { renderWithRouter } from 'shared/config/tests/renderWithRouter';
import { BurgerMenu } from './BurgerMenu';

describe('BurgerTest', () => {
    test('Is exist BurgerMenu & does not have active class', () => {
        renderWithRouter(<BurgerMenu isOpen={false} />);
        const menuBurger = screen.getByTestId('menu-burger');
        expect(menuBurger).toBeInTheDocument();
        expect(menuBurger).not.toHaveClass('active');
        screen.debug();
    });
    test('Is it has active class', () => {
        render(<BurgerMenu isOpen />);
        const menuBurger = screen.getByTestId('menu-burger');
        expect(menuBurger).toBeInTheDocument();
        expect(menuBurger).toHaveClass('active');
    });
});
