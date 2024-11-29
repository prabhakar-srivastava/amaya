import Section, { TYPE } from "../Section/section"
import Image from "next/image"

export const Promobanner=()=>{
    return(
        <Section type={TYPE.CONTAIN} sectionStyle={'!py-0'}>
            <div className="bg-slate-600 h-96 w-full">
                <Image src={"/promobanner.png"} alt={""} width={1000} height={1000} className="w-full h-full object-fill" />
            </div>
        </Section>
    )
}