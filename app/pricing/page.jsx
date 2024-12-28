import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const includedFeatures = [
  'Highlight Video (2 min)',
  'Drone Videos',
  'Social Media Vertical Reels',
  'Twilight Footage'
]

const includedFeatures2 = [
  'Everything in Video Package and more',
  '20 exterior photos (drone included)',
  '30 interior photos',
  'Virtual/true twilight photos',
  'Online tour page'
]

const includedFeatures3 = [
  'Drone Only (15 ct) - $75',
  '30 exterior/interior photos - $100',
  'Zillow 3D Tour - $10',
  '30 Second Reel - $75'
]

const includedFeatures4 = [
  'Agent Walkthrough - $75',
  'Supercar entry - depends on car',
  'Clutter/lawn correction (2 ct) - $20',
]

const pricing = () => {
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My Pricing
        </h2>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Buyers are 65% more likely to buy with drone photos. Agents get 4X the inquiries with cinematic video. Get yours today.
          </h2>
          <p className='mt-6 text-lg leading-8'>
            All footage is available in 4K. Price match is available.
          </p>

        </div>

        {/* Pricing */}
        <div className='mx-auto mt-16 max-w-2xl ring-1 ring-gray-200 rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className='text-2xl font-bold tracking-tight'>Video Package</h3>
            <p className='mt-6 text-base leading-7'>
              Get cinematic video to enhance your listing.
            </p>

          <div className='mt-10 flex items-center gap-x-4'>
            <h4 className='flex-none text-sm font-semibold leading-6 text-primary'>What's Included</h4>
            <div className='h-px flex-auto bg-gray-100'></div>
          </div>

          <ul role='list'
          className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'>
            {
              includedFeatures.map((feature) => (
                <li
                key={feature}
                className='flex text-muted-foreground gap-x-3'>
                <CheckIcon
                className='h-6 w-5 flex-none text-primary'
                aria-hidden='true'/>
                {feature}
                </li>
              ))
            }
          </ul>

          </div>

        <div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
          <div className='bg-muted py-10 rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
            <div className='mx-auto max-w-xs px-8'>
              <p className='text-base font-semibold'>Pay once, own forever</p>
              <p className='mt-6 flex items-baseline justify-center gap-x-2'>
                <span className='text-5xl font-bold tracking-tight'>$350</span>
                <span className='text-sm font-semibold leading-6 tracking-wide'>USD</span>
              </p>
              <Link href='/contact'>
                <Button  className='gap-x-2 mt-3'>
                  Purchase
                </Button>
              </Link>
          <p className='mt-6 text-cs leading-5'>Call us today!</p>

            </div>

          </div>
        </div>

        </div>

      {/* Pricing 2 */}
      <div className='mx-auto mt-16 max-w-2xl ring-1 ring-gray-200 rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className='text-2xl font-bold tracking-tight'>Premium</h3>
            <p className='mt-6 text-base leading-7'>
              The ultimate package
            </p>

          <div className='mt-10 flex items-center gap-x-4'>
            <h4 className='flex-none text-sm font-semibold leading-6 text-primary'>What's Included</h4>
            <div className='h-px flex-auto bg-gray-100'></div>
          </div>

          <ul role='list'
          className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'>
            {
              includedFeatures2.map((feature) => (
                <li
                key={feature}
                className='flex text-muted-foreground gap-x-3'>
                <CheckIcon
                className='h-6 w-5 flex-none text-primary'
                aria-hidden='true'/>
                {feature}
                </li>
              ))
            }
          </ul>

          </div>

        <div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
          <div className='bg-muted py-10 rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
            <div className='mx-auto max-w-xs px-8'>
              <p className='text-base font-semibold'>Pay once, own forever</p>
              <p className='mt-6 flex items-baseline justify-center gap-x-2'>
                <span className='text-5xl font-bold tracking-tight'>$650</span>
                <span className='text-sm font-semibold leading-6 tracking-wide'>USD</span>
              </p>

              <Button href='/contact' className='gap-x-2 mt-3'>
                Purchase
              </Button> 
          <p className='mt-6 text-cs leading-5'>Call us today!</p>

            </div>

          </div>
        </div>

        </div>

      {/* Pricing3 */}
      <div className='mx-auto mt-16 mb-16 max-w-2xl ring-1 ring-gray-200 rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className='text-2xl font-bold tracking-tight'>Add Ons</h3>
            <p className='mt-6 text-base leading-7'>
              Add on!
            </p>

          <div className='mt-10 flex items-center gap-x-4'>
            <h4 className='flex-none text-sm font-semibold leading-6 text-primary'>What's Included</h4>
            <div className='h-px flex-auto bg-gray-100'></div>
          </div>

          <ul role='list'
          className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'>
            {
              includedFeatures4.map((feature) => (
                <li
                key={feature}
                className='flex text-muted-foreground gap-x-3'>
                <CheckIcon
                className='h-6 w-5 flex-none text-primary'
                aria-hidden='true'/>
                {feature}
                </li>
              ))
            }
          </ul>

          </div>

        </div>

        {/* Pricing4 */}
      <div className='mx-auto mt-16 mb-16 max-w-2xl ring-1 ring-gray-200 rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className='text-2xl font-bold tracking-tight'>A la Carte</h3>
            <p className='mt-6 text-base leading-7'>
              Have something else in mind? Pick and choose your own package!
            </p>

          <div className='mt-10 flex items-center gap-x-4'>
            <h4 className='flex-none text-sm font-semibold leading-6 text-primary'>What's Included</h4>
            <div className='h-px flex-auto bg-gray-100'></div>
          </div>

          <ul role='list'
          className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'>
            {
              includedFeatures3.map((feature) => (
                <li
                key={feature}
                className='flex text-muted-foreground gap-x-3'>
                <CheckIcon
                className='h-6 w-5 flex-none text-primary'
                aria-hidden='true'/>
                {feature}
                </li>
              ))
            }
          </ul>

          </div>

        </div>

          {/*
        
const includedFeatures = [
  '20 exterior photos (drone included)',
  'Highlight Video (1 min)',
  'Online Tour Page',
  'Virtual Twilight',
]

const includedFeatures2 = [
  '20 exterior photos (drone included)',
  '30 interior photos',
  '2 Promo Videos (1 min, 2 min)',
  'Virtual/true twilight',
  'Online tour page'
]

const includedFeatures3 = [
  'Drone Only (15 ct) - $75',
  'Virtual Staging (1ct) - $30',
  'Zillow 3D Tour - $10',
  'Clutter/lawn correction (2 ct) - $20',
]

const pricing = () => {
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My Pricing
        </h2>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Buyers are 65% more likely to buy with drone photos. Get yours today.
          </h2>
          <p className='mt-6 text-lg leading-8'>
            All footage is available in 4K. Price match is available.
          </p>

        </div>

        
        <div className='mx-auto mt-16 max-w-2xl ring-1 ring-gray-200 rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className='text-2xl font-bold tracking-tight'>Starter Package</h3>
            <p className='mt-6 text-base leading-7'>
              Get drone photos and cinematic video to enhance your listing.
            </p>

          <div className='mt-10 flex items-center gap-x-4'>
            <h4 className='flex-none text-sm font-semibold leading-6 text-primary'>What's Included</h4>
            <div className='h-px flex-auto bg-gray-100'></div>
          </div>

          <ul role='list'
          className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'>
            {
              includedFeatures.map((feature) => (
                <li
                key={feature}
                className='flex text-muted-foreground gap-x-3'>
                <CheckIcon
                className='h-6 w-5 flex-none text-primary'
                aria-hidden='true'/>
                {feature}
                </li>
              ))
            }
          </ul>

          </div>

        <div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
          <div className='bg-muted py-10 rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
            <div className='mx-auto max-w-xs px-8'>
              <p className='text-base font-semibold'>Pay once, own forever</p>
              <p className='mt-6 flex items-baseline justify-center gap-x-2'>
                <span className='text-5xl font-bold tracking-tight'>$125</span>
                <span className='text-sm font-semibold leading-6 tracking-wide'>USD</span>
              </p>
              <Link href='/contact'>
                <Button  className='gap-x-2 mt-3'>
                  Purchase
                </Button>
              </Link>
          <p className='mt-6 text-cs leading-5'>Call us today!</p>

            </div>

          </div>
        </div>

        </div>

      <div className='mx-auto mt-16 max-w-2xl ring-1 ring-gray-200 rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className='text-2xl font-bold tracking-tight'>Premium</h3>
            <p className='mt-6 text-base leading-7'>
              The ultimate package
            </p>

          <div className='mt-10 flex items-center gap-x-4'>
            <h4 className='flex-none text-sm font-semibold leading-6 text-primary'>What's Included</h4>
            <div className='h-px flex-auto bg-gray-100'></div>
          </div>

          <ul role='list'
          className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'>
            {
              includedFeatures2.map((feature) => (
                <li
                key={feature}
                className='flex text-muted-foreground gap-x-3'>
                <CheckIcon
                className='h-6 w-5 flex-none text-primary'
                aria-hidden='true'/>
                {feature}
                </li>
              ))
            }
          </ul>

          </div>

        <div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
          <div className='bg-muted py-10 rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
            <div className='mx-auto max-w-xs px-8'>
              <p className='text-base font-semibold'>Pay once, own forever</p>
              <p className='mt-6 flex items-baseline justify-center gap-x-2'>
                <span className='text-5xl font-bold tracking-tight'>$225</span>
                <span className='text-sm font-semibold leading-6 tracking-wide'>USD</span>
              </p>

              <Button href='/contact' className='gap-x-2 mt-3'>
                Purchase
              </Button> 
          <p className='mt-6 text-cs leading-5'>Call us today!</p>

            </div>

          </div>
        </div>

        </div>

        <div className='mx-auto mt-16 mb-16 max-w-2xl ring-1 ring-gray-200 rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className='text-2xl font-bold tracking-tight'>A La Carte</h3>
            <p className='mt-6 text-base leading-7'>
              Pick and choose additional services or different options
            </p>

          <div className='mt-10 flex items-center gap-x-4'>
            <h4 className='flex-none text-sm font-semibold leading-6 text-primary'>What's Included</h4>
            <div className='h-px flex-auto bg-gray-100'></div>
          </div>

          <ul role='list'
          className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'>
            {
              includedFeatures3.map((feature) => (
                <li
                key={feature}
                className='flex text-muted-foreground gap-x-3'>
                <CheckIcon
                className='h-6 w-5 flex-none text-primary'
                aria-hidden='true'/>
                {feature}
                </li>
              ))
            }
          </ul>

          </div>

        </div>



      </div>
    </section>
  */}

      </div>
    </section>



  )
}

export default pricing