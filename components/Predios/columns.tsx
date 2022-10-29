import { ColumnsType } from 'antd/lib/table'
import { Space, Table, Tag } from 'antd'
import DeleteButton from '../CrudFunctions/DeleteButton'
import UpdateButton from '../CrudFunctions/UpdateButton'
import { deletePredio } from '../../redux/features/predios/prediosSlice'
export const columns: ColumnsType<any> = [
  {
    title: 'Número',
    dataIndex: 'numberIdentifier',
    key: 'numberIdentifier'
  },
  {
    title: 'Avalúo',
    dataIndex: 'value',
    key: 'value'
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Departamento',
    dataIndex: 'department',
    key: 'department'
  },
  {
    title: 'Municipio',
    dataIndex: 'municipality',
    key: 'municipality'
  },
  {
    title: 'Propietarios',
    dataIndex: 'Propietarios',
    key: 'Propietarios',
    ellipsis: true,
    render: (_: any, record: any, __: number) => {
      if (record?.Propietarios.length) {
        return record?.Propietarios.map((e: any) => e.name).join(', ')
      } else {
        return '-'
      }
    }
  },
  {
    title: 'Construcciones',
    dataIndex: 'buildings',
    key: 'buildings',
    ellipsis: true,
    render: (_: any, record: any, __: number) => {
      return record?.Construcciones?.length
    }
  },
  {
    title: 'Terreno',
    dataIndex: 'terrain',
    key: 'terrain',
    ellipsis: true,
    render: (_: any, record: any, __: number) => {
      return record.Terreno ? 'SI' : 'NO'
    }
  },
  {
    title: 'Acción',
    key: 'action',
    render: (_: any, record: any) => (
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <DeleteButton record={record} action={deletePredio} />
        <UpdateButton />
      </div>
    )
  }
]
