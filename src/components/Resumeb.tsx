"use client"

import { BorderBeam } from "./magicui/border-beam"
import { CoolMode } from "./magicui/cool-mode"
import { Button } from "./ui/button"

export const Resumeb = () => {
    return (
        <div className="relative justify-center">

            <div className="relative flex flex-col pl-[1px] items-center justify-center">

                <div className="relative flex h-[39px] w-[140px] flex-col pl-[1px] items-start justify-start overflow-hidden rounded-lg border bg-background md:shadow-xl">
                    <CoolMode
                        options={{
                            size: 150,
                            speedUp: 20,
                            particle: "https://attic.sh/ts01mkhcj378gfaj841dnygqz4ps",
                        }}
                    >
                        <Button className="pt-2"><a
                            href="/natanel_liloz.pdf"
                            download={"natanel liloz"}
                            target="_blank"
                        >Get My Resume
                        </a>
                        </Button>
                    </CoolMode>
                    <BorderBeam size={65} duration={12} borderWidth={4} />
                </div>
            </div>
        </div>
    )
}
