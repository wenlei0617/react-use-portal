/*
 * @Author: gary 
 * @Date: 2020-08-06 17:40:00 
 * @Last Modified by: gary
 * @Last Modified time: 2020-08-06 17:56:48
 */
import React, { useCallback } from 'react';
import styles from './styles.module.css';

interface WrapProps {
    onClick: () => void,
    className?: string
}

const includeTarget = (target:HTMLElement, content: HTMLElement):boolean => {
    return target.contains(content);
}

const Wrap:React.FC<WrapProps> = ({children, onClick, className = ''}) => {
    const handleClick = useCallback((e: React.MouseEvent) => {
        const childNodes = (e.currentTarget as HTMLElement).childNodes;

        for (let i = 0; i < childNodes.length; i++) {
            if (!includeTarget(childNodes[i] as HTMLElement, e.target as HTMLElement)) {
                onClick && onClick();
            }
        }
    }, []);
    return (
        <div onClick={handleClick} className={`${styles.modal} ${className}`}>
            {children}
        </div>
    )
}

export default Wrap;