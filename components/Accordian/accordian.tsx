"use client"
import { ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import Section, { TYPE } from "../Section/section";
const faqs = [
    {
        id: 1,
        header: "What is Lorem Ipsum?",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
        id: 2,
        header: "Where does it come from?",
        text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `
    },
    {
        id: 3,
        header: "Why do we use it?",
        text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`
    },
    {
        id: 4,
        header: "Why do we use it?",
        text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`
    },
    {
        id: 5,
        header: "Why do we use it?",
        text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`
    },
    {
        id: 6,
        header: "Why do we use it?",
        text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`
    }
    
]

const AccordionItem = (props: { handleToggle: any; active: any; faq: any; }) => {
    const contentEl: any = useRef();
    const { handleToggle, active, faq } = props;
    const { header, id, text } = faq;

    return (
        <div className="rc-accordion-card">
            <div className="rc-accordion-header">
                <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                    <h5 className="rc-accordion-title">{header}</h5>
                    <div className={`${active === id ? 'rotate-180 transition-all duration-500 text-white' : 'transition-all duration-500'}`}>
                        <ChevronDown />
                    </div>
                </div>
            </div>
            <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
                active === id
                    ? { height: contentEl.current.scrollHeight }
                    : { height: "0px" }
            }>
                <div className="rc-accordion-body">
                    <p className='mb-0'>{text}</p>
                </div>
            </div>
        </div>
    )
}

export const Accordion = () => {

    const [active, setActive] = useState(null);

    const handleToggle = (index: any) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }

    return (
        <Section type={TYPE.FULL} sectionStyle={'bg-slate-50 px-4 lg:px-0'}>
            <div className="container-fluid mt-5 mb-5  !bg-transparent lg:max-w-[900px] m-auto ">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-2">
                        <div className="card">
                            <div className="card-body lg:flex gap-11">
                                <h4 className="form-heading mb-6  text-black text-4xl lg:text-6xl font-serif mt-3">Have Questions?<br /> Get Answers</h4>
                                <div>
                                    {faqs.map((faq, index) => {
                                        return (
                                            <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                                        )
                                    })
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

