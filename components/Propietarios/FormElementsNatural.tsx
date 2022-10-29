import { Form, Input, InputNumber, Select } from 'antd'
import React from 'react'

const FormElements = () => {
  const [form] = Form.useForm()

  return (
    <Form form={form}>
      <div style={{ marginBottom: 20 }}>
        <p>Tipo de documento:</p>
        <Form.Item name="docType" noStyle>
          <Select style={{ width: '100%' }}>
            <Select.Option value="CC">CC</Select.Option>
            <Select.Option value="TI">TI</Select.Option>
          </Select>
        </Form.Item>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p>Número de documento</p>
        <Form.Item name="docNum" noStyle>
          <Input />
        </Form.Item>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p>Nombre</p>
        <Form.Item name="name" noStyle>
          <Input />
        </Form.Item>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p>Dirección</p>
        <Form.Item name="address" noStyle>
          <Input />
        </Form.Item>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p>Teléfono</p>
        <Form.Item name="phone" noStyle>
          <Input />
        </Form.Item>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p>Email</p>
        <Form.Item name="email" noStyle rules={[{ type: 'email' }]}>
          <Input type="email" />
        </Form.Item>
      </div>
    </Form>
  )
}

export default FormElements
