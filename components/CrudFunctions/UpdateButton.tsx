import { EditOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'

const UpdateButton = () => {
  return (
    <Tooltip title="Actualizar">
      <Button shape="circle" icon={<EditOutlined />} />
    </Tooltip>
  )
}

export default UpdateButton
