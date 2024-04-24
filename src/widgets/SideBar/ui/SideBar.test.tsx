import { fireEvent, screen } from '@testing-library/react';
import { renderWithRouter } from 'shared/config/tests/renderWithRouter';
import SideBar from './SideBar';

describe('SideBarTest', () => {
    test('Is exist SideBar', () => {
        renderWithRouter(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        screen.debug();
    });
    test('Is open and close SideBar', () => {
        renderWithRouter(<SideBar />);
        const sideBar = screen.getByTestId('sidebar');
        expect(sideBar).toBeInTheDocument();
        const menuBurger = screen.getByTestId('menu-burger');
        fireEvent.click(menuBurger);
        expect(sideBar).toHaveClass('active');
        fireEvent.click(menuBurger);
        expect(sideBar).toHaveClass('close');
    });
});
