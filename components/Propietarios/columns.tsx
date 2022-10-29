import { ColumnsType } from 'antd/lib/table'
import { deletePropietario } from '../../redux/features/propietarios/propietariosSlice'
import DeleteButton from '../CrudFunctions/DeleteButton'
import UpdateButton from '../CrudFunctions/UpdateButton'

export const columnsNatural: ColumnsType<any> = [
  {
    title: 'Tipo de documento',
    dataIndex: 'docType',
    key: 'docType'
  },
  {
    title: 'Número de documento',
    dataIndex: 'docNum',
    key: 'docNum'
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Dirección',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Teléfono',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (_: any, record: any, __: number) => (record?.email ? record?.email : '-')
  },
  {
    title: 'Acción',
    key: 'action',
    render: (_: any, record: any) => (
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <DeleteButton record={record} action={deletePropietario} />
        <UpdateButton />
      </div>
    )
  }
]

export const columnsLegal = [
  {
    title: 'NIT',
    dataIndex: 'nit',
    key: 'nit'
  },
  {
    title: 'Razón social',
    dataIndex: 'businessName',
    key: 'businessName'
  },
  {
    title: 'Dirección',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Teléfono',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (_: any, record: any, __: number) => (record?.email ? record?.email : '-')
  },
  {
    title: 'Acción',
    key: 'action',
    render: (_: any, record: any) => (
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <DeleteButton record={record} action={deletePropietario} />
        <UpdateButton />
      </div>
    )
  }
]
