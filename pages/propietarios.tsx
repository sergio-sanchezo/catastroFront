import { Divider, Table } from 'antd'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CreateButton from '../components/CrudFunctions/CreateButton'
import { columnsLegal, columnsNatural } from '../components/Propietarios/columns'
import FormElementsNatural from '../components/Propietarios/FormElementsNatural'
import FormElementsJuridico from '../components/Propietarios/FormElementsJuridico'
import { fetchAllPropietariosJuridicos, fetchAllPropietariosNaturales } from '../redux/features/propietarios/propietariosSlice'
import { RootState } from '../redux/store'

const Predios: NextPage = () => {
  const { listJuridicos, listNaturales } = useSelector((state: RootState) => state.propietarios)
  const dispatch = useDispatch()

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchAllPropietariosJuridicos())

    //@ts-ignore
    dispatch(fetchAllPropietariosNaturales())
  }, [])

  return (
    <>
      <h2>Propietarios</h2>
      <div className="header">
        <h3>Personas Naturales</h3>
        <CreateButton content={FormElementsNatural()} />
      </div>
      <Table pagination={{ pageSize: 2 }} columns={columnsNatural} dataSource={listNaturales} />

      <Divider />

      <div className="header">
        <h3>Personas Jurídicas</h3>
        <CreateButton content={FormElementsJuridico()} />
      </div>
      <Table pagination={{ pageSize: 2 }} columns={columnsLegal} dataSource={listJuridicos} />
    </>
  )
}

export default Predios
