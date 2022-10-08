import { CssClasses } from '@nfinite-wisdom/render/style';
import { Container, Heading3, Text, Heading4 } from '@nfinite-wisdom/render/atom';
import { type ComponentConfigFn } from '@nfinite-wisdom/render/render';
import { BlockText } from '../comps/block-text.comp';
import { LI, UL } from '../comps/list.atom';

const Skill = (header: string, ...body: ComponentConfigFn[]) => Container(
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
            'from-sky-500',
            'to-indigo-500'
        ),
        Text(header)
    ),
    Container(
        ...body
    )
);

const SkillItem = (text: string, idx: number) => LI(
    BlockText(text),
    CssClasses('transition-opacity', 'duration-200', 'opacity-0'),
    p => {
        setTimeout(() => p.component.el.classList.add('opacity-100'), 250 + idx * 50);
    }
);

export const MySkills = Container(
    CssClasses(
        'bg-slate-800',
        'text-gray-200',
        'pb-5',
        'px-3',
        'md:px-0'
    ),
    Heading3(
        CssClasses('text-3xl', 'p-5'),
        Text('My Skills')
    ),
    Container(
        CssClasses('flex', 'flex-wrap', 'w-full', 'justify-around', 'flex-col', 'md:flex-row'),
        Skill(
            'Front End',
            UL(
                CssClasses('ml-5'),
                ...['Angular', 'React', 'JACL', 'VanillaJS', 'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'SCSS', 'Flutter'].map(SkillItem)
            )
        ),
        Skill(
            'Back End',
            UL(
                CssClasses('ml-5'),
                ...['C#', 'NodeJS', 'Java', 'NextJS', 'Express', 'AWS Lambda', 'Azure Functions', 'GCP Functions'].map(SkillItem)
            )
        ),
        Skill(
            'Other',
            UL(
                CssClasses('ml-5'),
                ...['SQL', 'DynamoDB', 'Java', 'Azure', 'AWS'].map(SkillItem)
            )
        )
    )
);
