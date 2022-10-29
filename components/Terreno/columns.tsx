import { deleteTerreno } from '../../redux/features/terrenos/terrenosSlice'
import DeleteButton from '../CrudFunctions/DeleteButton'
import UpdateButton from '../CrudFunctions/UpdateButton'

export const columns = [
  {
    title: 'Área',
    dataIndex: 'area',
    key: 'area'
  },
  {
    title: 'Valor comercial',
    dataIndex: 'comercialValue',
    key: 'comercialValue'
  },
  {
    title: 'Cerca a fuentes de agua',
    dataIndex: 'nearWaterBodies',
    key: 'nearWaterBodies',
    render: (_: any, record: any) => (record.nearWaterBodies ? 'Si' : 'No')
  },
  {
    title: 'Tipo de terreno',
    dataIndex: 'terrainType',
    key: 'terrainType'
  },
  {
    title: 'Tiene construcciones',
    dataIndex: 'hasBuildings',
    key: 'hasBuildings',
    render: (_: any, record: any) => (record.hasBuildings ? 'Si' : 'No')
  },
  {
    title: 'Acción',
    key: 'action',
    render: (_: any, record: any) => (
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <DeleteButton record={record} action={deleteTerreno} />
        <UpdateButton />
      </div>
    )
  }
]
