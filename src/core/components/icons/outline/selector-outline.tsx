import React from 'react'

export const SelectorOutline = React.memo<React.SVGProps<SVGSVGElement>>(props => (
  <svg {...props}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"/>
    </svg>
))
