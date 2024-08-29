import React, { FC, useRef } from 'react';
import LoginForm, { RefType } from 'features/AuthByUserName/ui/LoginForm/LoginForm';
import Modal from 'shared/Modal/ui/Modal';
import { ThemeButton } from 'shared/Button/ui/Button';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { loginByUserName } from 'features/AuthByUserName/model/services/loginByUserName/loginByUserName';
import { getLoginSchema } from 'features/AuthByUserName/model/selectors/getLoginSchema';

interface LoginModalProps {
}

const LoginModal: FC<LoginModalProps> = () => {
    const childRef = useRef<RefType>(null);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { isLoading } = useSelector(getLoginSchema);
    const onSubmit = () => {
        if (childRef.current) {
            const result = childRef?.current?.onSubmit();
            // @ts-ignore
            if (result) {
                dispatch(loginByUserName(result));
            }
        }
    };

    return (
        <Modal
            title={t('Авторизация')}
            defaultBtn={{
                btnName: 'Войти',
                onClick: onSubmit,
                disabled: isLoading,
            }}
            openBtn={{ btnName: 'Войти', theme: ThemeButton.INVERTED_CLEAR }}
            destroy
        >
            <LoginForm ref={childRef} />
        </Modal>
    );
};

export { LoginModal };
