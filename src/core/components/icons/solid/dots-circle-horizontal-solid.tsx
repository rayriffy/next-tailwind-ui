import React from 'react'

export const DotsCircleHorizontalSolid = React.memo<React.SVGProps<SVGSVGElement>>(props => (
  <svg {...props}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
    </svg>
))
