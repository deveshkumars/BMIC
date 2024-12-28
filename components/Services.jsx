import { Smile, Scan, Bird } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'

const servicesData = [
    {
        icon: <Smile size={48} strokeWidth={1} />,
        title: 'Drone Photos',
        description: 'The National Association of Realtors found that buyers are 65% more likely to buy a property with drone photos. We provide high-quality drone photos at a competitive price.'
    },
    {
        icon: <Scan size={48} strokeWidth={1}/>,
        title: 'Interior/exterior photo/video',
        description: 'We produce quality interior/exterior photos, along with virtual twilight photos.'
    },
    {
        icon: <Scan size={48} strokeWidth={1}/>,
        title: 'Drone Video',
        description: 'We are able to produce cinematic video using our drone capabilities. Agents with cinematic video are 400% more likely to get inquiries.'
    },

]

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
        <div className='container mx-auto'>
            <h2 className='section-title mb-6 xl:mb-24 text-center mx-auto'>Our Services</h2>

            {/* Category Items */}
            <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                {
                    servicesData.map((item, index) => {
                        return (
                            <Card
                            className='relative w-full max-w-[425px] h-[450px] flex flex-col pb-10 justify-center items-center cursor-pointer hover:bg-tertiary dark:hover:bg-white/10 transition-all duration-700'
                            key={index}>
                                <CardHeader
                                className='text-primary'
                                >
                                    <div className='w-[80px] h-[80px] bg-primary text-white rounded-full flex justify-center items-center absolute -bottom-6 right-6'>
                                        {item.icon}
                                    </div>

                                </CardHeader>
                                <CardContent className='text-center'>
                                    <CardTitle className='mb-4'>
                                        {item.title}
                                    </CardTitle>
                                    <CardDescription className='text-lg'>
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </div>

        </div>
    </section>

  )
}

export default Services