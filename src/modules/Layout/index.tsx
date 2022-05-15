import { PropsWithChildren } from 'react';

function Layout<P = {}>({ children }: PropsWithChildren<P>) {
    return <div className="Layout">{children}</div>;
}

export default Layout;
