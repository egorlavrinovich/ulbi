import { FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    element?: Element | DocumentFragment
    isPortal?: boolean
}

const Portal: FC<PortalProps> = ({
    children,
    element,
    isPortal,
}) => {
    const mainContainer = document.getElementsByClassName('app')[0];

    return isPortal ? createPortal(
        children,
        element || mainContainer,
    ) : <>{children}</>;
};

export default Portal;
