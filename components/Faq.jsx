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
                                    01. Do you have a work sample?
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes, see the portfolio sample on this webpage.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div>
                    <Accordion type='single' collapsible className='w-full'>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <div className='ms-3'>
                                    02. What is your pricing?
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                The prices are flexible and listed on the pricing page. Feel free to give us a call!
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div>
                    <Accordion type='single' collapsible className='w-full'>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                <div className='ms-3'>
                                    03. Why should I choose you?
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                We offer the highest quality photo and video at the lowest price, with the fastest turnarounds.
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