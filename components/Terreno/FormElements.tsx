import { Button, Form, Input, InputNumber, Switch } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { createTerreno } from '../../redux/features/terrenos/terrenosSlice'

const FormElements = () => {
  const [form] = Form.useForm()

  const dispatch = useDispatch()

  const handleFinish = (input: any) => {
    console.log(input)

    //@ts-ignore
    dispatch(createTerreno(input))
  }

  return (
    <Form form={form} onFinish={handleFinish}>
      <div style={{ marginBottom: 20 }}>
        <p>Área:</p>
        <Form.Item name="area" noStyle>
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p>Valor comercial</p>
        <Form.Item name="comercialValue" noStyle>
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p>Cerca a fuentes de agua</p>
        <Form.Item name="nearWaterBodies" valuePropName="checked" initialValue={false} noStyle>
          <Switch />
        </Form.Item>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p>Tipo de terreno</p>
        <Form.Item name="terrainType" noStyle>
          <Input />
        </Form.Item>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p>Tiene construcciones</p>
        <Form.Item name="hasBuildings" valuePropName="checked" initialValue={false} noStyle>
          <Switch />
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
