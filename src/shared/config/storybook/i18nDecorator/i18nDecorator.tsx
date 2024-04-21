import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import Loading from 'shared/Loading/ui/Loading';
import i18n from '../../i18n/i18n';

// Wrap your stories in the I18nextProvider component
export const withI18nextDecorator = (Story: any) => (
    // This catches the suspense from components not yet ready (still loading translations)
    // Alternative: set useSuspense to false on i18next.options.react when initializing i18next
    <Suspense fallback={<Loading />}>
        <I18nextProvider i18n={i18n}>
            <Story />
        </I18nextProvider>
    </Suspense>
);
