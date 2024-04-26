import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Modal.module.scss'
import Cross from 'shared/assets/cross.svg'
import Button, { ThemeButton, ButtonProps } from 'shared/Button/ui/Button';

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
    defaultBtn?: boolean,
    onOk?: HandleProps
    onCancel?: HandleProps
}

const Modal: FC<ModalProps> = ({ title = 'Заголовок', openBtn, footerBtn, defaultBtn = true }) => { //TODO дописать кастомные кнопки
    const [isOpen, setIsOpen] = useState(false)
    const onHandleClose = () => {
        setIsOpen(false)
    }
    const onHandleOpen = () => setIsOpen(true)
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }
    return (
        <>
            <Button onClick={onHandleOpen} {...openBtn}>{openBtn?.btnName}</Button>
            <div onClick={onHandleClose} className={classNames({ cls: classes.overlay, mods: { [classes.open]: true, [classes.close]: !isOpen } })}>
                <div onClick={onContentClick} className={classNames({ cls: classes.modal, mods: { [classes.open]: true, [classes.close]: !isOpen } })}>
                    <div className={classNames({ cls: classes.modalHeader })}>
                        <div className={classNames({ cls: classes.modalHeaderTitle })}>{title}</div>
                        <div onClick={onHandleClose} className={classNames({ cls: classes.modalHeaderCross })}><Cross /></div>
                    </div>
                    <div className={classNames({ cls: classes.modalContent })}>
                    </div>
                    <div className={classNames({ cls: classes.modalActions })}>
                        {!defaultBtn && footerBtn?.map((btn) => btn)}
                        {defaultBtn && <Button theme={ThemeButton.PRIMARY}>Сохранить</Button>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;