
export const pageScaleVariants = {
    in: {
        opacity: 1,
        x: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        x: "-100%",
        scale: 0.5
    }
}

export const pageScaleTransitions = {
    type: "tween",
    ease: "easeOut",
    duration: 1
}

export const pageRotateVariants ={
    in: {
        opacity: 1,
        rotateY: "0deg"
    },
    out: {
        opacity: 0,
        rotateY: "80deg"
    }
}

export const pageRotateTransitions = {
    type: "tween",
    ease: "easeOut",
    duration: 1
}

export const pageScalRotVariants ={
    in: {
        opacity: 1,
        rotateZ: "0deg",
        scale: 1
    },
    out: {
        opacity: 0,
        rotateZ: "120deg",
        scale: 0.1
    }
}

export const pageScalRotTransitions = {
    type: "tween",
    ease: "easeIn",
    duration: 1
}