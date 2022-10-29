import { Table } from 'antd'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { columns } from '../components/Construcciones/columns'
import FormElements from '../components/Construcciones/FormElements'
import CreateButton from '../components/CrudFunctions/CreateButton'
import { fetchAllConstrucciones } from '../redux/features/construcciones/construccionesSlice'
import { RootState } from '../redux/store'

const Construcciones: NextPage = () => {
  const { list } = useSelector((state: RootState) => state.construcciones)
  const dispatch = useDispatch()

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchAllConstrucciones())
  }, [])

  return (
    <>
      <div className="header">
        <h2>Construcciones</h2>
        <CreateButton content={FormElements()} />
      </div>
      <Table pagination={{ pageSize: 2 }} columns={columns} dataSource={list} />
    </>
  )
}

export default Construcciones
