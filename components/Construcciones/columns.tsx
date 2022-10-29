import { deleteConstruccion } from '../../redux/features/construcciones/construccionesSlice'
import DeleteButton from '../CrudFunctions/DeleteButton'
import UpdateButton from '../CrudFunctions/UpdateButton'

export const columns = [
  {
    title: 'Número de pisos',
    dataIndex: 'floorsNumber',
    key: 'floorsNumber'
  },
  {
    title: 'Área total',
    dataIndex: 'area',
    key: 'area'
  },
  {
    title: 'Tipo de construcción',
    dataIndex: 'buildingType',
    key: 'buildingType'
  },
  {
    title: 'Dirección',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Acción',
    key: 'action',
    render: (_: any, record: any) => (
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <DeleteButton record={record} action={deleteConstruccion} />
        <UpdateButton />
      </div>
    )
  }
]
