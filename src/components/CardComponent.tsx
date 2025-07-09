// CardComponent.tsx
import React from "react"

interface Props {
    variant: "Front" | "Back",
    card: any,
    index: number,
    tarotBg: string,
    tarotFront?: string
}

export const CardComponent: React.FC<Props> = ({variant, card, index, tarotBg, tarotFront}) => {
    return (
        <div className="text-center border rounded-lg p-2 shadow-sm bg-black">
            {/* Sadece ön ya da arka yüzeyi göster */}
            {variant === "Front" ? (
                <img
                    src={tarotBg}
                    alt={`img-${index}`}
                    className={`mx-auto mb-2 w-full h-auto object-cover ${
                        card.reversed ? "rotate-180" : ""
                    }`}
                />
            ) : (
                <>
                    <strong className={'text-white'}>{card.name}</strong>
                    <div className="w-full h-60 flex items-center justify-center mt-2  bg-black rounded">
                        <img
                            src={tarotFront}
                            alt={`img-${index}`}
                            className={`mx-auto mb-2 w-full h-auto object-cover ${
                                card.reversed ? "rotate-180" : ""
                            }`}
                        />
                    </div>
                </>
            )}
        </div>
    )
}
