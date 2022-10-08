import { HTMLApp } from '@nfinite-wisdom/render/web';
import { Container, Heading, Text } from '@nfinite-wisdom/render/atom';
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
                        'flex',
                        'justify-center',
                        'items-center', 'h-[50%]', 'bg-cover', 'text-gray-300',
                        'relative',
                        'bg-fixed'
                    ),
                    MyLinks,
                    Heading(
                        CssClasses('text-4xl', 'mx-auto'),
                        Text('Site coming soon!')
                    )
                ),
                MySkills
            )
        ),
        document.getElementById('root')!
    );
})();
