import { HTMLApp } from '@nfinite-wisdom/render/web';
import { Container, Heading, Heading2, Text } from '@nfinite-wisdom/render/atom';
import { CssClasses, CssClassesComp } from '@nfinite-wisdom/render/style';
import './styles.css';
import { Sidebar } from './sidebar.comp';
import { MySkills } from './skills/my-skills.comp';
import { MyLinks } from './my-links/my-links.comp';

(function () {
    const Body = CssClassesComp('h-full', 'w-full', 'flex')(Container);
    HTMLApp(
        Body(
            Sidebar,
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
                Container(
                    // Spacer for bottom bar
                    CssClasses('h-20', 'md:h-0')
                )
            )
        ),
        document.getElementById('root')!
    );
})();
