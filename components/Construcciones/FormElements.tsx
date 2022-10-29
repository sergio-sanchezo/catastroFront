import { Form, Input, InputNumber } from 'antd'
import React from 'react'

const FormElements = () => {
  const [form] = Form.useForm()

  return (
    <Form form={form}>
      <div style={{ marginBottom: 20 }}>
        <p>Número de pisos:</p>
        <Form.Item name="floorsNumber" noStyle>
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p>Área total</p>
        <Form.Item name="area" noStyle>
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p>Tipo de construcción</p>
        <Form.Item name="buildingType" noStyle>
          <Input />
        </Form.Item>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p>Dirección</p>
        <Form.Item name="address" noStyle>
          <Input />
        </Form.Item>
      </div>
    </Form>
  )
}

export default FormElements
