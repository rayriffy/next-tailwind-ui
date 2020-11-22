import React from 'react'

import { NextPage } from 'next'

import { ArrowRight } from '../core/components/icons/arrowRight'

const Page: NextPage = props => {
  return (
    <div className="max-w-4xl mx-auto py-8 sm:px-6 lg:px-8">
      <div className="px-2 text-gray-900">
        <div>
          <h1 className="text-4xl font-bold">Next Tailwind UI</h1>
          <p>Template repository to develop Tailwind web application rapidly</p>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-6">
          <div className="col-span-2 md:col-span-1 rounded-lg p-6 space-y-2 transition border border-gray-200 hover:border-blue-500 hover:text-blue-500 bg-white">
            <h1 className="text-2xl font-bold inline-flex items-center">
              Preconfigured <ArrowRight className="w-6 h-6 ml-2" />
            </h1>
            <p>
              Don't waste time on configure your project every time! This
              template is already preconfigured and ready to use.
            </p>
          </div>
          <div className="col-span-2 md:col-span-1 rounded-lg p-6 space-y-2 transition border border-gray-200 hover:border-blue-500 hover:text-blue-500 bg-white">
            <h1 className="text-2xl font-bold inline-flex items-center">
              Up-to-date <ArrowRight className="w-6 h-6 ml-2" />
            </h1>
            <p>
              If you don't see deprecation notice yet, means I still using this
              template as a base and I still keeping this template up-to-date.
            </p>
          </div>
          <div className="col-span-2 md:col-span-1 rounded-lg p-6 space-y-2 transition border border-gray-200 hover:border-blue-500 hover:text-blue-500 bg-white">
            <h1 className="text-2xl font-bold inline-flex items-center">
              Optimized for Tailwind UI <ArrowRight className="w-6 h-6 ml-2" />
            </h1>
            <p>
              Someone may say "Why did you pay money that much when we have
              Tailblocks?", and I will say "Have you tried Tailwind UI before?"
            </p>
          </div>
          <div className="col-span-2 md:col-span-1 rounded-lg p-6 space-y-2 transition border border-gray-200 hover:border-blue-500 hover:text-blue-500 bg-white">
            <h1 className="text-2xl font-bold inline-flex items-center">
              Ready to deploy <ArrowRight className="w-6 h-6 ml-2" />
            </h1>
            <p>Deploy your site with zero configuration to Vercel</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
