import { CssClasses } from '@nfinite-wisdom/render/style';
import { Button, Container, Text } from '@nfinite-wisdom/render/atom';
import { InAction, Resolve, UseState } from '@nfinite-wisdom/render/render';
import { REST_CLIENT_TOKEN } from '@nfinite-wisdom/render/rest';
import { scopedStoreCreator } from '@nfinite-wisdom/render/store';
import { Conditional } from '@nfinite-wisdom/render/structural';

declare var grecaptcha: any;

const store = scopedStoreCreator<boolean>(() => false)({ loading: (s, value: boolean) => value });

export const ContactBtn = UseState(store)(s => Resolve(REST_CLIENT_TOKEN)(client => Button(
    CssClasses('bg-teal-800', 'text-white', 'p-3', 'rounded-sm', 'w-48', 'flex', 'justify-center'),
    p => {
        p.component.el.addEventListener('click', e => {
            e.preventDefault();
            const email = (document.getElementById('contact-email') as HTMLInputElement).value;
            const message = (document.getElementById('contact-message') as HTMLInputElement).value;
            if (!email || !message) return;
            s.actions.loading(true);
            grecaptcha.ready(function () {
                grecaptcha.execute('6Le4h3MiAAAAAJMvAPrZ6quA7sRwq9EZCtILbQ86', { action: 'submit' }).then(function (token) {
                    // Add your logic to submit to your backend server here.
                    client.post('https://us-central1-nickfavero-site-api.cloudfunctions.net/contact', {
                        token,
                        email,
                        message
                    })({
                        next: () => {
                            (document.getElementById('contact-email') as HTMLInputElement).value = '';
                            (document.getElementById('contact-message') as HTMLInputElement).value = '';
                            s.actions.loading(false);
                        },
                        err: () => {
                            s.actions.loading(false);
                        }
                    })
                });
            });
        })
    },
    Conditional(Container(CssClasses('loading', 'animate-loader')), Text('Contact me'))(
        InAction('show', s.stateUpdated)
    )
)));
