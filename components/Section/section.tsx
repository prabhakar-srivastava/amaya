import React, {  ReactNode } from 'react'

export enum TYPE{
    FULL,
    CONTAIN
}

interface SectionProps{
    sectionID?: string | undefined; 
    sectionStyle: any; 
    type: TYPE; 
    children?: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; 

}

function Section(props:SectionProps) {
  return (
    <section id={props?.sectionID} className={`${props?.sectionStyle? props.sectionStyle :``} ${props?.type===TYPE.FULL?'w-full py-6 lg:py-16':'lg:max-w-[1350px] lg:px-0  py-6 lg:py-10'} m-auto`}>
        {props?.children}
    </section>
  )
}

export default Section