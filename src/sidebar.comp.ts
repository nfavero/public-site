import { CssClasses } from '@nfinite-wisdom/render/style';
import { Container } from '@nfinite-wisdom/render/atom';
import { BlockText } from './comps/block-text.comp';

export const Sidebar = Container(
    CssClasses(
        'fixed',
        'bottom-0',
        'w-full',
        'flex-col',
        'bg-cyan-900',
        'text-white',
        'fixed',
        'flex',
        'justify-center',
        'overflow-hidden',
        'px-4',
        'animate-slideUp',
        'md:p-4',
        'md:justify-start',
        'md:animate-none',
        'md:m-h-full',
        'md:h-full',
        'md:flex',
        'md:relative',
        'md:w-auto'
    ),
    Container(
        CssClasses(
            'flex',
            'justify-center',
            'items-center',
            'rounded-full',
            'bg-gradient-to-br',
            'from-red-800',
            'to-violet-700',
            'shadow-md',
            'shadow-violet-500',
            'w-12',
            'h-12'
        ),
        BlockText('NF')
    )
);
