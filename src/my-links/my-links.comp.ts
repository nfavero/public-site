import { CssClasses } from '@nfinite-wisdom/render/style';
import { Container, Text } from '@nfinite-wisdom/render/atom';
import { RawAtom } from '../comps/raw-atom.comp';
import github from './github.svg';
import medium from './medium.svg';
import linkedIn from './linked-in-dark.svg';
import codepen from './codepen.svg';
import { Link } from '../comps/link.atom';
import { ComponentFactory } from '@nfinite-wisdom/render';
import { SrOnly } from '../comps/sr-only.comp';

// Medium, LinkedIn, Github, nfinite-wisdom

const Github = RawAtom(github);
const Medium = RawAtom(medium);
const LinkedIn = RawAtom(linkedIn);
const Codepen = RawAtom(codepen);

const IconLink = (href: string, icon: ComponentFactory<any>, alt: string, pad?: boolean) => Link(
    pad ? CssClasses('ml-3') : () => {},
    p => p.component.el.href = href,
    p => p.component.el.target = '_blank',
    SrOnly(Text(alt)),
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
    IconLink('https://github.com/nfavero', Github, 'Github', false),
    IconLink('https://www.linkedin.com/in/nickfavero', LinkedIn, 'Linked-in', true),
    IconLink('https://medium.com/@nick-r-favero', Medium, 'Medium', true),
    IconLink('https://codepen.io/nfavero', Codepen, 'Codepen', true),
);
