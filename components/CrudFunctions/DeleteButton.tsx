import { DeleteOutlined } from '@ant-design/icons'
import { Button, Modal, Tooltip } from 'antd'
import { useDispatch } from 'react-redux'
import { deletePropietario } from '../../redux/features/propietarios/propietariosSlice'

const DeleteButton = ({ record, action }: { record: any; action: (id: string) => void }) => {
  const dispatch = useDispatch()

  const handleOnClick = () => {
    Modal.warning({
      title: '¿Quieres eliminar este registro?',
      okText: 'Eliminar',
      okCancel: true,
      cancelText: 'Cancelar',
      centered: true,
      closable: true,
      //@ts-ignore
      onOk: () => dispatch(action(record.id as string))
    })
  }

  return (
    <Tooltip title="Eliminar">
      <Button shape="circle" icon={<DeleteOutlined />} onClick={handleOnClick} />
    </Tooltip>
  )
}

export default DeleteButton
