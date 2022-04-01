import { useState, useMemo } from 'react'

import './CardInfo.scss'

export const CardInfo = (props) => {
  const { cardInfo } = props

  const [visible, setVisible] = useState(true)

  const cardNumber = useMemo(() => {
    const arr = []

    if (cardInfo.num) {
      const str = String(cardInfo.num)

      for (let index = 0; index < str.length; index++) {
        if (index % 4 === 0) {
          arr.push(str.slice(index, index + 4))
        }
      }
    }

    if (!visible) {
      return arr.map((num, index) => {
        if (visible) {
          return num
        }

        return index <= arr.length - 2 ? '****' : num
      })
    }

    return arr
  }, [cardInfo.num, visible])

  const onToggleVisibleClick = () => {
    setVisible(pre => !pre)
  }

  return (
    <div className="card-info">
      <div className="card-info__top" />
      
      <div className="card-info__bottom">
        <div className="card-info__title">{cardInfo?.name}</div>
        <div className="card-info__number">
          {cardNumber.map((num, index) => (<div key={index}>{num}</div>))}
        </div>
        <div className="card-info__date">
          <div>Thru: {cardInfo?.date}</div>
          <div>CVC: {visible ? cardInfo?.cvc : '***'}</div>
        </div>
      </div>

      <button className="card-info__btn" onClick={onToggleVisibleClick}>
        {visible ? 'Hide card number' : 'Show card number'}
      </button>
    </div>
  )
}
