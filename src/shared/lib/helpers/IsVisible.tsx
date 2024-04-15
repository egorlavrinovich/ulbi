import { FC } from 'react';

interface IsVisibleProps {
    condition: boolean
}

export const IsVisible: FC<IsVisibleProps> = ({ children, condition }) => (
    <>
        {!condition && children}
    </>
);
