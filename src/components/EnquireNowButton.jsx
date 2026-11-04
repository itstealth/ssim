'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

const EnquireNowDialog = dynamic(() => import('./EnquireNowDialog'), { ssr: false })

export default function EnquireNowButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 hover:bg-red-500 text-white font-medium py-6 px-2 sm:py-6 sm:px-3 shadow-lg transition-all duration-200 hover:shadow-xl transform hover:scale-105"
          aria-label="Enquire Now"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          <span className="text-xs sm:text-sm tracking-wider whitespace-nowrap">
            ENQUIRE NOW
          </span>
        </button>
      </div>
      {isOpen && (
        <EnquireNowDialog open={isOpen} onOpenChange={setIsOpen} />
      )}
    </>
  )
}
