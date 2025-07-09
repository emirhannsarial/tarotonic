// // components/TarotCardList.tsx
// import {getAllCards} from '../utils/getAllCards';
// import {TarotCard} from "../types";
//
// export default function TarotCardList() {
//     const cards: TarotCard[] = getAllCards();
//
//     return (
//         <div className="p-4 overflow-x-auto">
//             <div className="grid grid-cols-6 gap-4">
//                 {cards.map((card) => (
//                     <div
//                         key={card.id}
//                         className="flex-shrink-0 w-40 text-center border rounded-lg p-2 shadow-sm hover:shadow-md transition"
//                     >
//                         <h3 className="text-sm font-semibold">{card.name}</h3>
//                         <img
//                             src={card.img}
//                             alt={card.name}
//                             className={`mx-auto mb-2 w-full h-auto ${
//                                 card.reversed ? 'rotate-180' : ''
//                             }`}
//                         />
//                         <p></p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// components/TarotCardList.tsx
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {getAllCards} from "../utils/getAllCards";
import {TarotCard} from "../types";

import tarotBg from "../tarot-bg.jpg";
import {FlippableCard} from "./FlippableCard";

export default function TarotCardList() {
    const cards: TarotCard[] = getAllCards();
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setHasMounted(true), 300);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={''}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-11">
                {cards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        initial={{
                            opacity: 0,
                            scale: 0.5,
                            x: 0,
                            y: 0,
                            position: "relative",
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                        animate={
                            hasMounted
                                ? {
                                    opacity: 1,
                                    scale: 1,
                                    x: 0,
                                    y: 0,
                                    position: "static",
                                }
                                : {}
                        }
                        transition={{
                            delay: index * 0.1,
                            duration: 0.6,
                            type: "spring",
                        }}
                    >
                        <FlippableCard
                            variant={"Front"}
                            width={160} // px olarak width
                            height={250}
                            card={card}
                            index={index}
                            tarotFront={card.img}
                            tarotBg={tarotBg}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
