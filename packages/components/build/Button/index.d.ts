import * as React from 'react';
export interface ButtonProps {
    children: any;
    onClick?: () => void;
}
export interface ButtonState {
}
export declare class Button extends React.Component<ButtonProps, ButtonState> {
    render(): JSX.Element;
}
