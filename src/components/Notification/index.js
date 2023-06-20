import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props

  return (
    <div className="notification-con">
      {children}
      <GrFormClose className="clear-notification" />
    </div>
  )
}

export default Notification
