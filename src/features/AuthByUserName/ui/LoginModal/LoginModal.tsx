import React, { FC, useRef } from 'react';
import LoginForm, { RefType } from 'features/AuthByUserName/ui/LoginForm/LoginForm';
import Modal from 'shared/Modal/ui/Modal';
import { ThemeButton } from 'shared/Button/ui/Button';
import { useTranslation } from 'react-i18next';

interface LoginModalProps {
}

const LoginModal: FC<LoginModalProps> = () => {
    const childRef = useRef<RefType>(null);
    const { t } = useTranslation();
    const onSubmit = () => {
        if (childRef.current) {
            console.log(childRef.current.onSubmit());
        }
    };

    return (
        <Modal
            title={t('Авторизация')}
            defaultBtn={{
                btnName: 'Войти',
                onClick: onSubmit,
            }}
            openBtn={{ btnName: 'Войти', theme: ThemeButton.INVERTED_CLEAR }}
            destroy
        >
            <LoginForm ref={childRef} />
        </Modal>
    );
};

export { LoginModal };
