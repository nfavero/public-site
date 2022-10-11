import { CssClasses, Heading4 } from '@nfinite-wisdom/render';
import { Container, Text } from '@nfinite-wisdom/render/atom';
import { BlockText } from '../comps/block-text.comp';

export const About = Container(
    CssClasses(
        'bg-sky-800',
        'text-gray-200',
        'p-4'
    ),
    Container(
        CssClasses(
            'rounded-md',
            'border-solid',
            'border',
            'border-teal-500',
            'shadow-md',
            'shadow-gray-500',
            'w-full',
            'md:w-1/4',
            'mt-3'
        ),
        Heading4(
            CssClasses(
                'text-2xl',
                'p-5',
                'border-b-2',
                'border-teal-500',
                'bg-gradient-to-br',
                'to-fuchsia-800',
                'from-indigo-500'
            ),
            Text('About me')
        ),
        Container(
            CssClasses('p-4'),
            BlockText(`I love my wife and dog more than anything and enjoy drinking a beer and playing games with friends and travelling on occasion.`),
            BlockText(
                `I have been a professional Software Engineer for over a decade.  Before that I got my start writing sites during middle school and high school.
                I have always had a passion for web design and myy skills have evolved from VanillaJS to JQuery, AngularJS, Knockout, to most modern web frameworks and am
                now writing my own (JACL).  I have spent a good amount of time writing full stack solutions, which include web servers, databases, cloud infrastructure and
                event architectures.
                `)
        )
    )
);
