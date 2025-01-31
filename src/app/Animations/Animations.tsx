import React, {HTMLAttributes, ReactNode} from 'react';
import {motion, Variants} from 'framer-motion';

interface AnimationWrapperProps {
    children: ReactNode;
    animationType: 'fadeIn' | 'scaleIn' | 'slideInFromLeft' | 'rotateIn' | 'flipInX' | 'slideUp' | 'slideDown' | 'slideRight' | 'slideLeft' | 'zoomIn';
    duration?: number;
    delay?: number;
    easing?: [number, number, number, number];
    className?: string;
    alwaysVisible?: boolean
    id?:string
}

const fadeInVariants: Variants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
};

const scaleInVariants: Variants = {
    hidden: {opacity: 0, scale: 0},
    visible: {opacity: 1, scale: 1},
};

const slideInFromLeftVariants: Variants = {
    hidden: {opacity: 0, x: -100},
    visible: {opacity: 1, x: 0},
};

const rotateInVariants: Variants = {
    hidden: {opacity: 0, rotate: -180},
    visible: {opacity: 1, rotate: 0},
};

const flipInXVariants: Variants = {
    hidden: {opacity: 0, rotateX: 90},
    visible: {opacity: 1, rotateX: 0},
};

const slideUpVariants: Variants = {
    hidden: {opacity: 0, y: 100},
    visible: {opacity: 1, y: 0},
};

const slideDownVariants: Variants = {
    hidden: {opacity: 0, y: -100},
    visible: {opacity: 1, y: 0},
};

const slideRightVariants: Variants = {
    hidden: {opacity: 0, x: -100},
    visible: {opacity: 1, x: 0},
};

const slideLeftVariants: Variants = {
    hidden: {opacity: 0, x: 100},
    visible: {opacity: 1, x: 0},
};

const zoomInVariants: Variants = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {opacity: 1, scale: 1},
};

const getVariants = (animationType: string): Variants => {
    switch (animationType) {
        case 'fadeIn':
            return fadeInVariants;
        case 'scaleIn':
            return scaleInVariants;
        case 'slideInFromLeft':
            return slideInFromLeftVariants;
        case 'rotateIn':
            return rotateInVariants;
        case 'flipInX':
            return flipInXVariants;
        case 'slideUp':
            return slideUpVariants;
        case 'slideDown':
            return slideDownVariants;
        case 'slideRight':
            return slideRightVariants;
        case 'slideLeft':
            return slideLeftVariants;
        case 'zoomIn':
            return zoomInVariants;
        default:
            return {};
    }
};

const AnimationWrapper = (
    {
        children,
        animationType,
        duration = 0.3,
        delay = 0,
        easing = [0.42, 0, 0.58, 1],
        alwaysVisible,
        ...rest
    }: AnimationWrapperProps) => {
    const variants = getVariants(animationType);

    return (
        <motion.div
            {...rest}
            initial="hidden"
            whileInView='visible'
            animate={alwaysVisible && 'visible'}
            viewport={{once: true}}
            transition={{duration, delay, ease: easing}}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default AnimationWrapper;