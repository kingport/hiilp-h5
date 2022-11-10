import React, { useState } from 'react'
import reactLogo from '@assets/react.svg'
import HomeStyle from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import SvgIcon from '@/components/SvgIcon'

function Home() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  const goAboutPage = () => {
    navigate('/about')
  }

  return (
    <div className={`${HomeStyle.home}`}>
      <div className="flex">
        <p>1111</p>
        <p>222</p>
        {/* <SvgIcon name="avatar" /> */}
      </div>
    </div>
  )
}

export default Home
