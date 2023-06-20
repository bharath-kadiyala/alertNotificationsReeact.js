import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <dvi className="main-con">
    <h1 className="main-title">Alert Notifications</h1>

    <Notification>
      <AiFillCheckCircle className="icon-sty success" />
      <div className="text-con">
        <h1 className="title text-success">Success</h1>
        <p className="pera">You can access all the files in the folder</p>
      </div>
    </Notification>

    <Notification>
      <RiErrorWarningFill className="icon-sty error" />
      <div className="text-con">
        <h1 className="title text-error">Error</h1>
        <p className="pera">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>

    <Notification>
      <MdWarning className="icon-sty warning" />
      <div className="text-con">
        <h1 className="title text-warning">Warning</h1>
        <p className="pera">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>

    <Notification>
      <MdInfo className="icon-sty info" />
      <div className="text-con">
        <h1 className="title text-info">Info</h1>
        <p className="pera">Anyone on the internet can view these files</p>
      </div>
    </Notification>
  </dvi>
)

export default AlertNotifications
