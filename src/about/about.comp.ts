import { CssClasses } from '@nfinite-wisdom/render';
import { Container, Heading3, Text } from '@nfinite-wisdom/render/atom';
import { BlockText } from '../comps/block-text.comp';

export const About = Container(
    CssClasses('bg-fuchsia-800', 'p-4', 'text-white'),
    Heading3(Text('About me'), CssClasses('text-lg')),
    Container(
        BlockText(
            `I have been a professional Software Engineer for over a decade.  Before that I got my start writing sites during middle school and high school.
            I have always had a passion for web design and myy skills have evolved from VanillaJS to JQuery, AngularJS, Knockout, to most modern web frameworks and am
            now writing my own (JACL).  I have spent a good amount of time writing full stack solutions, which include web servers, databases, cloud infrastructure and
            event architectures.
            `),
        BlockText(`I love my wife and dog more than anything and enjoy drinking a beer and playing games with friends and travelling on occasion.`)
    )
);
