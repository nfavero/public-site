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
        'shadow-violet-500',
        'shadow-inner',
        'w-full',
        'md:w-1/4',
        'mt-3'
    ),
    Heading4(
        CssClasses('text-2xl', 'p-5', 'border-b-2', 'border-teal-500'),
        Text(header)
    ),
    Container(
        ...body
    )
);

export const MySkills = Container(
    CssClasses('bg-slate-800', 'text-gray-200'),
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
                LI(BlockText('Angular')),
                LI(BlockText('React')),
                LI(BlockText('JACL')),
                LI(BlockText('VanillaJS')),
                LI(BlockText('HTML')),
                LI(BlockText('CSS')),
                LI(BlockText('Flutter'))
            )
        ),
        Skill(
            'Back End',
            UL(
                CssClasses('ml-5'),
                LI(BlockText('C#')),
                LI(BlockText('NodeJS')),
                LI(BlockText('Java')),
                LI(BlockText('NextJS'))
            )
        ),
        Skill(
            'Other',
            UL(
                CssClasses('ml-5'),
                LI(BlockText('SQL')),
                LI(BlockText('DynamoDB')),
                LI(BlockText('Java')),
                LI(BlockText('Azure')),
                LI(BlockText('AWS'))
            )
        )
    )
);
