import routes, { kebabCategories, kebabChapters } from '@/data/routes'
import { kebabCase } from '@/lib/utils'
import React from 'react'

function FRQPage({ slug, children }) {
  const kebabChaptersSelection = kebabChapters[kebabCategories.indexOf(slug[0])]
  return (
    <div className="w-full frqpage-main">
      <h3 className="border-b border-gray-300 mb-4 pb-2 uppercase italic font-semibold text-gray-400 text-base tracking-widest">
        Free Response Practice
      </h3>
      <h1 className="text-4xl">
        {
          routes[kebabCategories.indexOf(slug[0])].children[
            kebabChaptersSelection.indexOf(slug[1])
          ]
        }
      </h1>
      <br />
      {children}
    </div>
  )
}

export default FRQPage
