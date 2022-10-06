import { CssClasses } from '@nfinite-wisdom/render/style';
import { Container } from '@nfinite-wisdom/render/atom';
import { BlockText } from './comps/block-text.comp';

export const Sidebar = Container(
    CssClasses('flex', 'flex-col', 'h-full', 'p-4', 'bg-cyan-900', 'text-white'),
    Container(
        CssClasses('rounded-full', 'bg-gradient-to-br', 'from-red-800', 'to-violet-700', 'p-4',
            'shadow-md',
            'shadow-violet-500'
        ),
        BlockText('NF')
    )
);
