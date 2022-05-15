import classnames from 'classnames';
import './font/iconfont';
import './index.css';

interface IconfontProps {
    type: string;
    className?: string;
    [propName: string]: any;
}

export default function Iconfont({ type, className, ...restProps }: IconfontProps) {
    return (
        <svg className={classnames('iconfont-root', className)} aria-hidden="true" {...restProps}>
            <use xlinkHref={`#icon-${type}`}></use>
        </svg>
    );
}
