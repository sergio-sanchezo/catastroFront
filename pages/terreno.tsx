import { Table } from 'antd'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CreateButton from '../components/CrudFunctions/CreateButton'
import { columns } from '../components/Terreno/columns'
import FormElements from '../components/Terreno/FormElements'
import { fetchAllterrenos } from '../redux/features/terrenos/terrenosSlice'
import { RootState } from '../redux/store'

const Terreno: NextPage = () => {
  const { list } = useSelector((state: RootState) => state.terrenos)
  const dispatch = useDispatch()

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchAllterrenos())
  }, [])

  console.log(list)

  return (
    <>
      <div className="header">
        <h2>Terreno</h2>
        <CreateButton content={FormElements()} />
      </div>
      <Table pagination={{ pageSize: 2 }} columns={columns} dataSource={list} />
    </>
  )
}

export default Terreno
