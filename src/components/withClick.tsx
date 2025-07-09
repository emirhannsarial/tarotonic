import React, {
    useState,
    useRef,
    useEffect,
    ComponentType,
    MouseEvent,
    CSSProperties,
} from "react"
import {motion, useSpring} from "framer-motion"

const springConfig = {
    type: "spring",
    stiffness: 300,
    damping: 40,
} as const

interface FlipWrapperProps {
    width: number | string
    height: number | string
    style?: CSSProperties
}

interface WithClickProps extends FlipWrapperProps {
    variant: "Front" | "Back"
}

export function withClick<P extends object>(
    WrappedComponent: ComponentType<P & WithClickProps>
): ComponentType<P & FlipWrapperProps> {
    return (props: P & FlipWrapperProps) => {
        const [isFlipped, setIsFlipped] = useState(false)
        const ref = useRef<HTMLDivElement>(null)

        const [rotateX, setRotateX] = useState(0)
        const [rotateY, setRotateY] = useState(0)

        const dx = useSpring(0, springConfig)
        const dy = useSpring(0, springConfig)
        // const handleClick = () => {
        //     let flips = 0
        //     const maxFlips = 3
        //     const flipInterval = 300 // ms
        //
        //     const intervalId = setInterval(() => {
        //         setIsFlipped((prev) => !prev) // Flip
        //         flips++
        //
        //         if (flips >= maxFlips * 2) {
        //             // Her flip çift yönlü olduğu için 2x
        //             clearInterval(intervalId)
        //             setIsFlipped((prev) => !prev) // En son ön yüz gösterilecekse false yap, arka yüz için true yap
        //         }
        //     }, flipInterval)
        // }
        const handleClick = () => {
            setIsFlipped((prev) => !prev)
        }

        const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
            const element = ref.current
            if (!element) return

            const rect = element.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            const offsetX = event.clientX - centerX
            const offsetY = event.clientY - centerY

            const degreeX = (-offsetY / rect.height) * 20
            const degreeY = (offsetX / rect.width) * 20

            setRotateX(degreeX)
            setRotateY(degreeY)
        }

        const handleMouseLeave = () => {
            setRotateX(0)
            setRotateY(0)
        }

        useEffect(() => {
            dx.set(rotateX)
            dy.set(rotateY)
        }, [rotateX, rotateY])

        return (
            <motion.div
                onClick={handleClick}
                style={{
                    perspective: "1080px",
                    width: props.width,
                    height: props.height,
                }}
            >
                <motion.div
                    ref={ref}
                    whileHover={{scale: 1.05}}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    transition={springConfig}
                    style={{
                        width: "100%",
                        height: "100%",
                        transformStyle: "preserve-3d",
                        rotateX: dx,
                        rotateY: dy,
                        position: "relative",
                    }}
                >
                    {/* Front Side */}
                    <motion.div
                        animate={{rotateY: isFlipped ? -180 : 0}}
                        transition={springConfig}
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            backfaceVisibility: "hidden",
                            zIndex: isFlipped ? 0 : 1,
                        }}
                    >
                        <WrappedComponent {...props} variant="Front"/>
                    </motion.div>

                    {/* Back Side */}
                    <motion.div
                        initial={{rotateY: 180}}
                        animate={{rotateY: isFlipped ? 0 : 180}}
                        transition={springConfig}
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            backfaceVisibility: "hidden",
                            zIndex: isFlipped ? 1 : 0,
                        }}
                    >
                        <WrappedComponent {...props} variant="Back"/>
                    </motion.div>
                </motion.div>
            </motion.div>
        )
    }
}