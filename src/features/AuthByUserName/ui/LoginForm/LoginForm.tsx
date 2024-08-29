import React, { forwardRef, Ref } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/Input/ui/Input';
import FormItem from 'shared/Form/ui/FormItem';
import Form from 'shared/Form/ui/Form';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
}

export interface RefType {
    onSubmit: () => void;
}

const LoginForm = (props: LoginFormProps, ref: Ref<RefType>) => (
    <div className={classNames({ cls: classes?.loginForm })}>
        {/* @ts-ignore */}
        <Form ref={ref} autoComplete="off">
            <FormItem
                key="userName"
                name="userName"
                rules={[{ minLength: 3, message: 'Больше 3-х символов' }, { required: true }]}
            >
                <Input
                    name="userName"
                    titleLabel={{ title: 'Введите логин', className: classes.labelTitle }}
                    placeholder="Введите логин"
                />
            </FormItem>
            <FormItem
                key="userPassword"
                name="userPassword"
                rules={[{ minLength: 2, message: 'Больше 2-x символов' }, { required: true }]}
            >
                <Input
                    type="password"
                    name="userPassword"
                    titleLabel={{ title: 'Введите пароль', className: classes.labelTitle }}
                    placeholder="Введите пароль"
                />
            </FormItem>
        </Form>
    </div>
);

export default forwardRef(LoginForm);
