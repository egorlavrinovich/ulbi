import React, {
    FormHTMLAttributes,
    forwardRef,
    ReactElement,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import { FormItemProps } from 'shared/Form/ui/FormItem';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    onFinish?: (data: any) => void
}

const Form = forwardRef<HTMLFormElement, FormProps>(({
    children, onSubmit, onFinish, ...props
}, ref) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [validateFields, setValidateFields] = useState<Record<string, boolean>>({});
    const childrenToArray = React.Children.toArray(children);
    const [isValidatedForm, setIsValidatedForm] = useState(false);

    const setDefaultFieldsConditionValidate = () => childrenToArray?.map((item: any) => setValidateFields((prev) => ({
        ...prev,
        [item.props.name]: false,
    })));

    const validateValuesFields = () => {
        // @ts-ignore
        setValidateFields(Object.fromEntries(Object.entries(validateFields)?.map(([key, _]: any[]) => [key, !formRef?.current?.elements?.[key]?.checkValidity()])));
        setIsValidatedForm(true);
    };

    const validateField = (name: string) => setValidateFields((prev) => ({
        ...prev,
        // @ts-ignore
        [name]: !formRef?.current?.elements?.[name]?.checkValidity(),
    }));

    useImperativeHandle(ref, (): any => ({
        onSubmit: () => {
            validateValuesFields();
            if (formRef.current && formRef.current.checkValidity()) {
                const formData = new FormData(formRef.current);
                const data = childrenToArray?.reduce((acc: {}, item: any) => ({
                    ...acc,
                    [item?.props?.name]: formData.get(item?.props?.name),
                }), {});
                return data;
            }
            return [];
        },
    }));

    useEffect(() => {
        setDefaultFieldsConditionValidate();
    }, [children]);

    return (
        <form onSubmit={onSubmit} ref={formRef} {...props}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as ReactElement<FormItemProps>, {
                        error: validateFields[child.props.name],
                        validateField,
                        isValidatedForm,
                    });
                }
                return child;
            })}
        </form>
    );
});

export default Form;
