import React, { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
// import('@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js')
// import './custom-element'

const DynamicComponentWithNoSSR = dynamic(
  () => {
    import('./custom-element')
  },
  {
    ssr: false
  }
)

const CustomElementFrame = () => {
  return (
    <div>
      <DynamicComponentWithNoSSR />
      <womans-day></womans-day>
    </div>
  )
}

export default CustomElementFrame
