'use client'
import Image from "next/image";


const Footer = () => {
    return (

        <div className=" p-10 flex flex-col">
            <button className=" flex flex-row gap-3 mx-auto hover:text-xl shadow-black"
            onClick={() => {
                window.location.href = 'https://www.facebook.com/groups/956466279243273'; // الرابط الخارجي
              }}
            >
                
                <div className=" flex flex-row gap-3 mx-auto">
                    <b>   مجموعتنا علي فيسبوك </b>
                    <Image
                        className=" h-10 w-10"
                        src={"/images/Footer/facebook.png"} alt={""} width={100} height={100} >
                    </Image>
                </div>
            </button>
        </div>
    )
}

export default Footer;
