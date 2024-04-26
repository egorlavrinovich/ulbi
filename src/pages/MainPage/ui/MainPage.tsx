import React from 'react';
import { useTranslation } from 'react-i18next'; 3
import Modal from 'shared/Modal/ui/Modal';
import { ThemeButton } from 'shared/Button/ui/Button';

const MainPage = () => {
    const { t } = useTranslation();

    return <Modal openBtn={{ btnName: 'Открыть', theme: ThemeButton.PRIMARY }} />
};

export default MainPage;
