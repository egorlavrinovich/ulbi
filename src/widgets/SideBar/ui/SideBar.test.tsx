import { fireEvent, render, screen } from '@testing-library/react';
import SideBar from './SideBar';

describe('SideBarTest', () => {
    test('Is exist SideBar', () => {
        render(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        screen.debug();
    });
    test('Is open and close SideBar', () => {
        render(<SideBar />);
        const sideBar = screen.getByTestId('sidebar');
        expect(sideBar).toBeInTheDocument();
        fireEvent.mouseEnter(sideBar);
        expect(sideBar).toHaveClass('active');
        fireEvent.mouseLeave(sideBar);
        expect(sideBar).toHaveClass('close');
    });
});
