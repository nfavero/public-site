import { CssClasses } from '@nfinite-wisdom/render/style';
import { Container, Heading3, Text, Heading4 } from '@nfinite-wisdom/render/atom';
import { ComponentFactory, type ComponentConfigFn } from '@nfinite-wisdom/render/render';
import { BlockText } from '../comps/block-text.comp';
import { LI, UL } from '../comps/list.atom';
import { RawAtom } from '../comps/raw-atom.comp';
import angular from './angular.svg';
import react from './react.svg';
import js from './js.svg';
import html from './html5.svg';
import css from './css.svg';
import tailwind from './tailwindcss.svg';
import bootstrap from './bootstrap.svg';
import sass from './sass.svg';
import flutter from './flutter.svg';
import nextJS from './nextjs.svg';
import node from './node.svg';
import sql from './sql.svg';
import java from './java.svg';
import azure from './azure.svg';
import aws from './aws.svg';
import googleCloud from './google-cloud.svg';
import express from './express.svg';
import cSharp from './c-sharp.svg';
import web3 from './web3.svg';

const Angular = RawAtom(angular);
const React = RawAtom(react);
const JS = RawAtom(js);
const HTML = RawAtom(html);
const Css = RawAtom(css);
const Tailwind = RawAtom(tailwind);
const Bootstrap = RawAtom(bootstrap);
const Sass = RawAtom(sass);
const Flutter = RawAtom(flutter);
const NextJS = RawAtom(nextJS);
const Node = RawAtom(node);
const Sql = RawAtom(sql);
const Java = RawAtom(java);
const Azure = RawAtom(azure);
const Aws = RawAtom(aws);
const GoogleCloud = RawAtom(googleCloud);
const Express = RawAtom(express);
const CSharp = RawAtom(cSharp);
const Web3 = RawAtom(web3);

const SkillItem = (text: string, icon: ComponentFactory<any>, bgColor: string, toColor: string) => Container(
    CssClasses(
        'rounded-md',
        'flex',
        'justify-content',
        'items-center',
        'bg-gradient-to-br',
        'from-slate-500',
        'shadow-sm',
        'shadow-blue-500',
        toColor
    ),
    Container(
        CssClasses('border-slate-500', 'border-r', 'rounded-l-md', 'p-3', bgColor),
        icon(
            CssClasses('h-6', 'w-6')
        )
    ),
    Container(
        CssClasses('p-3'),
        Text(text)
    )
);

export const MySkills = Container(
    CssClasses(
        'bg-slate-800',
        'text-gray-200',
        'pb-5',
        'px-3'
    ),
    Heading3(
        CssClasses('text-3xl', 'p-5'),
        Text('My Skills')
    ),
    Container(
        CssClasses('grid', 'grid-cols-1', 'md:grid-cols-4', 'xl:grid-cols-6', 'gap-3', 'md:gap-4'),
        SkillItem('Angular', Angular, 'bg-red-500', 'to-red-500'),
        SkillItem('React', React, 'bg-blue-500', 'to-blue-500'),
        SkillItem('VanillaJS', JS, 'bg-yellow-500', 'to-yellow-500'),
        SkillItem('HTML', HTML, 'bg-orange-500', 'to-orange-500'),
        SkillItem('CSS', Css, 'bg-blue-300', 'to-blue-300'),
        SkillItem('Tailwind', Tailwind, 'bg-teal-200', 'to-teal-200'),
        SkillItem('Bootstrap', Bootstrap, 'bg-violet-500', 'to-violet-500'),
        SkillItem('Sass', Sass, 'bg-gray-300', 'to-gray-300'),
        SkillItem('Flutter', Flutter, 'bg-sky-600', 'to-sky-600'),
        SkillItem('NodeJS', Node, 'bg-green-800', 'to-green-800'),
        SkillItem('C#', CSharp, 'bg-violet-300', 'to-violet-300'),
        SkillItem('Java', Java, 'bg-orange-600', 'to-orange-600'),
        SkillItem('NextJS', NextJS, 'bg-slate-600', 'to-slate-600'),
        SkillItem('Express', Express, 'bg-emerald-500', 'to-emerald-400'),
        SkillItem('Web3', Web3, 'bg-cyan-500', 'to-cyan-500'),
        SkillItem('AWS', Aws, 'bg-slate-400', 'to-slate-400'),
        SkillItem('Azure', Azure, 'bg-blue-800', 'to-blue-800'),
        SkillItem('GCS', GoogleCloud, 'bg-cyan-800', 'to-cyan-800'),
        SkillItem('SQL', Sql, 'bg-yellow-800', 'to-yellow-800'),
    )
);
