import { CssClasses } from '@nfinite-wisdom/render/style';
import { Container } from '@nfinite-wisdom/render/atom';
import { RawAtom } from '../comps/raw-atom.comp';
import github from './github.svg';
import medium from './medium.svg';
import linkedIn from './linked-in-dark.svg';
import { Link } from '../comps/link.atom';
import { ComponentFactory } from '@nfinite-wisdom/render';

// Medium, LinkedIn, Github, nfinite-wisdom

const Github = RawAtom(github);
const Medium = RawAtom(medium);
const LinkedIn = RawAtom(linkedIn);

const IconLink = (href: string, icon: ComponentFactory<any>, pad?: boolean) => Link(
    pad ? CssClasses('ml-3') : () => {},
    p => p.component.el.href = href,
    p => p.component.el.target = '_blank',
    icon(
        CssClasses('h-5')
    )
);
export const MyLinks = Container(
    CssClasses(
        'flex',
        'rounded-md',
        'bg-gray-400',
        'p-3',
        'absolute',
        'top-2',
        'right-2',
        'animate-shake',
        'hover:animate-none'
    ),
    IconLink('https://github.com/nfavero', Github, false),
    IconLink('https://www.linkedin.com/in/nickfavero', LinkedIn, true),
    IconLink('https://medium.com/@nick-r-favero', Medium, true)
);
