import { component, getRenderer, render, type ComponentFactory } from '@nfinite-wisdom/render/render';

export const RawAtom = <TEl, TExtendedProps extends Record<string, any>>(input: string): ComponentFactory<TEl, TExtendedProps> => {
    let _cached: HTMLTemplateElement;
    return (...fns) => props => {
            if (!_cached) {
                _cached = getRenderer(props.registry).el('div');
                _cached.innerHTML = input;
            }
            const clone = _cached.cloneNode(true);
            clone.childNodes.forEach((child, idx) => {
                console.log(child);
                render(p => component(child as any))(...fns as any)(props);
            });
        }
};
