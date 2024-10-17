import Image from "next/image"

const Footer=()=>{

    return(
        <footer className="bg-[#292759] text-white px-28 pt-10 flex flex-col justify-end">
            <span className="h-[1px] w-full block bg-[#F1F1F1] opacity-20"></span>
            <div className="flex justify-between items-center py-4">
                <div className="flex gap-4">
                    <Image src="/nhc-logo-white.svg" alt="" width={32} height={32} />
                    <Image src="/vision-2030-white.svg" alt="" width={50} height={32} />
                </div>

                <p className="text-sm text-white font-abel">
                    All rights reserved © 2022 - Developed and operated by National Housing
                </p>
            </div>
        </footer>
    )
}

export default Footer