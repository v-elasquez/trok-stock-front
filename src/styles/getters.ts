import {
    defaultTheme,
    ColorType,
    ColorIndex,
    ThemeProps,
    SpaceIndex,
    RadiiIndex
} from './default.theme';

// utility function to fallback to `defaultTheme` when necessary
function getTheme(props: ThemeProps) {
    return props.theme && props.theme.colors ? props.theme : defaultTheme;
}

// getColor("primary", 9, { theme }) === "hsl(205, 100%, 21%)"
export function getColor(
    type: ColorType,
    shade: ColorIndex,
    props: ThemeProps
) {
    return getTheme(props).colors[type][shade];
}

// getSpace(2, { theme }) === "12px"
export function getSpace(index: SpaceIndex, props: ThemeProps) {
    return `${getTheme(props).space[index]}px`;
}

export function getRadii(size: RadiiIndex, props: ThemeProps) {
    return `${getTheme(props).radii[size]}px`;
}
