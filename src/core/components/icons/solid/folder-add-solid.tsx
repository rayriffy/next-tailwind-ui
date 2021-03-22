import React from 'react'

export const FolderAddSolid = React.memo<React.SVGProps<SVGSVGElement>>(props => (
  <svg {...props}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11h4m-2-2v4"/>
    </svg>
))
