import { ReactNode } from "react";
import NavBar from "./nav";
import Footer from "./footer";

const BaseLayout=({children}:{children:ReactNode})=>{

    return(
        <>
        <NavBar/>
        {children}
        <Footer/>
        </>
    )
}

export default BaseLayout;