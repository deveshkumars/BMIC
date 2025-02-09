import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"

const Faq = () => {
  return (
    <section>
        <div className='container mx-auto'>
            <div className="w-full pt-12 mb-6 xl:mb-24">
                <h2 className="section-title mb-12 text-center mx-auto">
                    Our Studio
                </h2>
                <div>
                    <Accordion type='single' collapsible className='w-full'>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className='ms-3'>
                                    01.Can anyone join the club!
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes, anyone can join!
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div>
                    <Accordion type='single' collapsible className='w-full'>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <div className='ms-3'>
                                    02. What if I don't want to come to every workshop!
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                No worries, come whenever you'd like!
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div>
                    <Accordion type='single' collapsible className='w-full'>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                <div className='ms-3'>
                                    03. How often are there workshops!
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                We offer a couple every semester.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Faq