import { Table } from 'antd'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CreateButton from '../components/CrudFunctions/CreateButton'
import { columns } from '../components/Predios/columns'
import FormElements from '../components/Predios/FormElements'
import { fetchAllConstrucciones } from '../redux/features/construcciones/construccionesSlice'
import { fetchAllPredios, createPredio } from '../redux/features/predios/prediosSlice'
import { fetchAllPropietariosJuridicos, fetchAllPropietariosNaturales } from '../redux/features/propietarios/propietariosSlice'
import { fetchAllterrenos } from '../redux/features/terrenos/terrenosSlice'
import { RootState } from '../redux/store'

const Predios: NextPage = () => {
  const { list } = useSelector((state: RootState) => state.predios)
  const { list: construcciones } = useSelector((state: RootState) => state.construcciones)
  const { list: terrenos } = useSelector((state: RootState) => state.terrenos)
  const { listJuridicos, listNaturales } = useSelector((state: RootState) => state.propietarios)

  const dispatch = useDispatch()

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    //@ts-ignore
    dispatch(fetchAllPredios())

    //@ts-ignore
    dispatch(fetchAllPropietariosJuridicos())

    //@ts-ignore
    dispatch(fetchAllPropietariosNaturales())

    //@ts-ignore
    dispatch(fetchAllConstrucciones())

    //@ts-ignore
    dispatch(fetchAllterrenos())
  }

  const onCreate = (input: any) => {
    console.log(input)
    //@ts-ignore
    dispatch(createPredio(input))
  }

  return (
    <>
      <div className="header">
        <h2>Predios</h2>
        <CreateButton content={FormElements({ propietarios: [...listJuridicos, ...listNaturales], construcciones, terrenos })} />
      </div>
      <Table pagination={{ pageSize: 2 }} columns={columns} dataSource={list} />
    </>
  )
}

export default Predios
