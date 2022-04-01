import { useState } from 'react'
import './CardList.scss'

export const CardList = (props) => {
  const { onRowClick } = props

  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Mark Henry',
      num: '1234567812345678',
      date: '12/20',
      cvc: '567'
    },
    {
      id: 2,
      name: 'Xuka Mimi',
      num: '1234567812345678',
      date: '12/30',
      cvc: '825'
    },
    {
      id: 3,
      name: 'Xuka Mimi',
      num: '1234567812345678',
      date: '12/30',
      cvc: '825'
    },
  ])

  return (
    <div className="card-list">
      <h1 className="card-list__title">MEMBER LIST</h1>

      <table className="card-list__table">
        <tbody>
        {members.map((member, index) => (
          <tr key={member.id} onClick={() => onRowClick?.(member, index)}>
            <td>{member.id}.</td>
            <td>{member.name}</td>
            <td>{member.date} - {member.cvc}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}
