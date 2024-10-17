import Image from "next/image";

const NotFound = () => {

    return (
        <div className="flex flex-col justify-center items-center w-full">
           <Image src={'/no-results.svg'} width={160} height={160} alt="no results"/> 
            <p className="text-[#7F7F7F]">
                No results for your search!
            </p>
            <p className="text-[#7F7F7F]">
                Try another keyword
            </p>
        </div>
    )
}


export default NotFound;