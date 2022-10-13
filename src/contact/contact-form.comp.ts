import { CssClasses } from '@nfinite-wisdom/render/style';
import { Container, Heading3, Text } from '@nfinite-wisdom/render/atom';
import { HTMLAttr } from '@nfinite-wisdom/render/web';
import { Form } from '../comps/form.atom';
import { Input } from '../comps/input.comp';
import { Label } from '../comps/label.atom';
import { TextArea } from '../comps/text-area.comp';
import { ContactBtn } from './contact-btn.comp';

export const ContactForm = Form(
    CssClasses('p-3', 'bg-slate-800'),
    Heading3(
        CssClasses('text-lg', 'text-white'),
        Text('Contact me')
    ),
    Container(
        CssClasses('flex', 'flex-col'),
        Label(CssClasses('text-white'), Text('E-mail')),
        Input(
            CssClasses(
                'border-slate-500',
                'border',
                'rounded-sm',
                'valid:border-green-500',
                'focus-visible:border-blue-500',
                'p-2'
            ),
            HTMLAttr('placeholder', 'john@xyz.com'),
            HTMLAttr('type', 'email'),
            HTMLAttr('required', 'true'),
            HTMLAttr('id', 'contact-email')
        )
    ),
    Container(
        CssClasses('flex', 'flex-col', 'my-3'),
        Label(CssClasses('text-white'), Text('Message')),
        TextArea(
            CssClasses('border-slate-500', 'border', 'rounded-sm', 'valid:border-green-500', 'p-2'),
            HTMLAttr('placeholder', 'Dear Nick...'),
            HTMLAttr('required', 'true'),
            HTMLAttr('id', 'contact-message')
        )
    ),
    ContactBtn
);
