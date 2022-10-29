import { Button, Form, Input, InputNumber, Select } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { createPredio } from '../../redux/features/predios/prediosSlice'

const FormElements = ({ propietarios, construcciones, terrenos }: { propietarios: any[]; construcciones: any[]; terrenos: any[] }) => {
  const [form] = Form.useForm()

  const dispatch = useDispatch()

  const handleFinish = (input: any) => {
    //@ts-ignore
    dispatch(createPredio(input))
  }

  console.log(terrenos)

  return (
    <Form form={form} onFinish={handleFinish}>
      <div style={{ marginBottom: 20 }}>
        <p>Número predial:</p>
        <Form.Item name="numberIdentifier" noStyle>
          <Input />
        </Form.Item>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p>Avalúo</p>
        <Form.Item name="value" noStyle>
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p>Nombre</p>
        <Form.Item name="name" noStyle>
          <Input />
        </Form.Item>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p>Departamento</p>
        <Form.Item name="department" noStyle>
          <Input />
        </Form.Item>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p>Municipio</p>
        <Form.Item name="municipality" noStyle>
          <Input />
        </Form.Item>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p>Propietarios</p>
        <Form.Item name="Propietarios" noStyle>
          <Select mode="multiple" style={{ width: '100%' }}>
            {propietarios.map(e => {
              if (e.type === 'Natural') {
                return (
                  <Select.Option key={e.id} value={e.id}>
                    {e.name} {e.docNum}
                  </Select.Option>
                )
              }

              if (e.type === 'Juridica') {
                return (
                  <Select.Option key={e.id} value={e.id}>
                    {e.businessName} {e.nit}
                  </Select.Option>
                )
              }
            })}
          </Select>
        </Form.Item>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p>Construcciones</p>
        <Form.Item name="Construcciones" noStyle>
          <Select mode="multiple" style={{ width: '100%' }}>
            {construcciones.map(e => {
              return (
                <Select.Option key={e.id} value={e.id}>
                  {e.address}
                </Select.Option>
              )
            })}
          </Select>
        </Form.Item>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p>Terreno</p>
        <Form.Item name="Terrenos" noStyle>
          <Select style={{ width: '100%' }}>
            {terrenos.map(e => {
              return (
                <Select.Option key={e.id} value={e.id}>
                  {e.terrainType}
                </Select.Option>
              )
            })}
          </Select>
        </Form.Item>
      </div>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Aceptar
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FormElements
