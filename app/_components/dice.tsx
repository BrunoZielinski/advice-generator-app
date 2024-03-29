import { SVGProps } from 'react'

export const Dice = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M20 0H4a4.005 4.005 0 00-4 4v16a4.005 4.005 0 004 4h16a4.005 4.005 0 004-4V4a4.005 4.005 0 00-4-4zM7.5 18a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0-9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4.5 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4.5 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0-9a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
        fill="#202733"
      />
    </svg>
  )
}
