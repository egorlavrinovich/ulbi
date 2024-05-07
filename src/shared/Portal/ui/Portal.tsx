import { FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    element?: Element | DocumentFragment
    isPortal: boolean
}

const mainContainer = document.getElementsByClassName('app')[0];

const Portal: FC<PortalProps> = ({ children, element = mainContainer, isPortal }) => (
    <>
        {isPortal ? createPortal(
            children,
            element,
        ) : children}
    </>
);

export default Portal;
