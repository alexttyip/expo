import * as React from 'react';
import FirebaseRecaptcha from './FirebaseRecaptcha';
import { FirebaseAuthApplicationVerifier } from './FirebaseRecaptcha.types';
interface Props extends Omit<React.ComponentProps<typeof FirebaseRecaptcha>, 'onVerify'> {
    title?: string;
    cancelLabel?: string;
    invisible?: boolean;
}
interface State {
    token: string;
    visible: boolean;
    visibleLoaded: boolean;
    invisibleLoaded: boolean;
    invisibleVerify: boolean;
    resolve?: (token: string) => void;
    reject?: (error: Error) => void;
}
export default class FirebaseRecaptchaVerifierModal extends React.Component<Props, State> implements FirebaseAuthApplicationVerifier {
    static defaultProps: {
        title: string;
        cancelLabel: string;
    };
    state: State;
    static getDerivedStateFromProps(props: Props, state: State): {
        invisibleLoaded: boolean;
        invisibleVerify: boolean;
    } | null;
    get type(): string;
    verify(): Promise<string>;
    private onVisibleLoad;
    private onInvisibleLoad;
    private onFullChallenge;
    private onError;
    private onVerify;
    cancel: () => void;
    onDismiss: () => void;
    render(): JSX.Element;
}
export {};
