import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { Box, Clock, Dumbbell, LucidePaintBucket, PaintBucket, Salad, ShowerHead, Watch } from 'lucide-react'


const features = [
  {
    name: 'Personal Trainer',
    description:
      'Get your desired body from our line of trainers . Choose the one you like.',
    icon: Dumbbell,
  },
  {
    name: 'Nutrition',
    description:
      'Emphasize nutritional counseling and meal planning services provided by nutrition experts to support members in achieving overall health and fitness.',
    icon: Salad,
  },
  {
    name: 'Hygiene',
    description:
      'Assure members of the cleanliness and safety protocols implemented in the gym, including regular equipment sanitization and social distancing measures.',
    icon:  ShowerHead,
  },
  {
    name: '24*7 open',
    description:
      'If applicable, mention round-the-clock access to the gym facilities for members, providing flexibility for workouts at any time of the day.',
    icon: Clock,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32  " >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Features you get at the GYM
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            World Class Features at the GYM that you can&apos; miss
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
