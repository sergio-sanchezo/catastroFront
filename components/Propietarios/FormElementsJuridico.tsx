import { Form, Input, InputNumber } from 'antd'
import React from 'react'

const FormElements = () => {
  const [form] = Form.useForm()

  return (
    <Form form={form}>
      <div style={{ marginBottom: 20 }}>
        <p>NIT:</p>
        <Form.Item name="floorsNumber" noStyle>
          <Input />
        </Form.Item>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p>Razón social</p>
        <Form.Item name="area" noStyle>
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
