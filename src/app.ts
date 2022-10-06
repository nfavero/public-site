import { HTMLApp } from '@nfinite-wisdom/render/web';
import { Container, Heading, Text } from '@nfinite-wisdom/render/atom';
import { CssClasses, CssClassesComp } from '@nfinite-wisdom/render/style';
import './styles.css';
import { Sidebar } from './sidebar.comp';
import { Img } from './comps/img.atom';

(function () {
    const Body = CssClassesComp('h-full', 'w-full', 'flex')(Container);
    const Main = CssClassesComp('m-2')(Container);
    HTMLApp(
        Body(
            Sidebar,
            Container(
                CssClasses('w-full'),
                Container(
                    CssClasses('bg-img-hero', 'w-full', 'flex', 'justify-center', 'items-center', 'h-[50%]', 'bg-cover', 'text-gray-300'),
                    Heading(
                        CssClasses('text-4xl', 'mx-auto'),
                        Text('Site coming soon!')
                    )
                )
            )
        ),
        document.getElementById('root')!
    );
})();
