import React, { FC, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Cross from 'shared/assets/cross.svg';
import Button, { ThemeButton, ButtonProps } from 'shared/Button/ui/Button';
import { useTranslation } from 'react-i18next';
import Portal from 'shared/Portal/ui/Portal';
import i18n from 'i18next';
import classes from './Modal.module.scss';

interface BtnProps extends ButtonProps {
    btnName: string,
}

interface HandleProps {
    btpProps: ButtonProps,
    cb: () => void
}

interface ModalProps {
    title?: string
    openBtn?: BtnProps
    footerBtn?: React.ReactElement[]
    defaultBtn?: BtnProps,
    onOk?: HandleProps
    onCancel?: HandleProps
    isPortal?: boolean
}

const Modal: FC<ModalProps> = ({
    title = i18n.t('translation:Title'),
    openBtn,
    footerBtn,
    defaultBtn = {},
    isPortal = true,
}) => { // TODO дописать кастомные кнопки
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>();

    const onHandleClose = () => {
        setIsOpen(false);
        setTimeout(() => {
            modalRef.current.style.display = 'none';
        }, 300);
    };

    const onHandleOpen = () => {
        modalRef.current.style.display = 'flex';
        setIsOpen(true);
    };
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    return (
        <>
            <Button onClick={onHandleOpen} {...openBtn}>{openBtn?.btnName}</Button>
            <Portal isPortal={isPortal}>
                <div
                    ref={modalRef}
                    onClick={onHandleClose}
                    className={classNames({
                        cls: classes.overlay,
                        mods: { [classes.open]: isOpen, [classes.close]: !isOpen },
                    })}
                >
                    <div
                        onClick={onContentClick}
                        className={classNames({
                            cls: classes.modal,
                            mods: { [classes.open]: isOpen, [classes.close]: !isOpen },
                        })}
                    >
                        <div className={classNames({ cls: classes.modalHeader })}>
                            <div className={classNames({ cls: classes.modalHeaderTitle })}>{title}</div>
                            <div onClick={onHandleClose} className={classNames({ cls: classes.modalHeaderCross })}>
                                <Cross />
                            </div>
                        </div>
                        <div className={classNames({ cls: classes.modalContent })} />
                        <div className={classNames({ cls: classes.modalActions })}>
                            {footerBtn && footerBtn?.map((btn) => btn)}
                            {!footerBtn && (
                                <Button
                                    theme={defaultBtn.theme || ThemeButton.PRIMARY}
                                    {...defaultBtn}
                                >
                                    {defaultBtn?.btnName || t('Save')}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </Portal>
        </>
    );
};

export default Modal;
