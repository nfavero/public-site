import { HTMLApp } from '@nfinite-wisdom/render/web';
import { Container, Heading, Heading2, Text } from '@nfinite-wisdom/render/atom';
import { CssClasses, CssClassesComp } from '@nfinite-wisdom/render/style';
import './styles.css';
import { MySkills } from './skills/my-skills.comp';
import { MyLinks } from './my-links/my-links.comp';
import { About } from './about/about.comp';
import { BlockText } from './comps/block-text.comp';

// Recaptcha key: 6Le4h3MiAAAAAJMvAPrZ6quA7sRwq9EZCtILbQ86

(function () {
    const Body = CssClassesComp('h-full', 'w-full', 'flex')(Container);
    HTMLApp(
        Body(
            // Sidebar,
            Container(
                CssClasses('w-full'),
                Container(
                    CssClasses(
                        'bg-img-hero',
                        'w-full',
                        'flex-col',
                        'flex',
                        'justify-center',
                        'items-center', 'h-[50%]', 'bg-cover', 'text-gray-300',
                        'relative',
                        'bg-fixed'
                    ),
                    Container(
                        CssClasses(
                            'absolute',
                            'top-2',
                            'left-2',
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
                    ),
                    MyLinks,
                    Container(
                        CssClasses(
                            'p-3',
                            'md:p-10',
                            'rounded-md',
                            'bg-gradient-to-br',
                            'from-sky-500',
                            'to-indigo-500'
                        ),
                        Heading(
                            CssClasses('text-xl', 'md:text-4xl', 'mx-auto'),
                            Text('Nick Favero')
                        ),
                        Heading2(
                            CssClasses('text-lg', 'md:text-3xl', 'mx-auto', 'text'),
                            Text('A fun loving software engineer')
                        )
                    )
                ),
                MySkills,
                About
                // Container(
                //     // Spacer for bottom bar
                //     CssClasses('h-20', 'md:h-0')
                // )
            )
        ),
        document.getElementById('root')!
    );
})();
