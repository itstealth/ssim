'use client'

import { useEffect } from 'react'
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog'

export default function EnquireNowDialog({ open, onOpenChange }) {
  useEffect(() => {
    if (!open) return
    const scriptSrc = 'https://widgets.nopaperforms.com/emwgts.js'
    let retryTimer
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`)

    if (!existingScript) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = scriptSrc
      document.body.appendChild(script)
    }

    const timer = setTimeout(() => {
      if (typeof window.cIframe === 'function') {
        window.cIframe()
      } else {
        retryTimer = setInterval(() => {
          if (typeof window.cIframe === 'function') {
            window.cIframe()
            clearInterval(retryTimer)
          }
        }, 200)
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      if (retryTimer) clearInterval(retryTimer)
    }
  }, [open])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-xs max-w-[95vw] p-0 border-none bg-transparent"
        onInteractOutside={(event) => event.preventDefault()}
      >
        <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
          <DialogClose
            className="absolute right-2 top-2 z-20 rounded-full opacity-80 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none bg-white/90 hover:bg-white p-1.5 shadow-md"
            onClick={() => onOpenChange(false)}
            aria-label="Close dialog"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </DialogClose>
          <div className="p-3">
            <div
              className="npf_wgts"
              data-height="480px"
              data-w="0fcfc9608e978750ed1ee48671490e22"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
