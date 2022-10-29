import { PlusOutlined } from '@ant-design/icons'
import { Button, Modal } from 'antd'
import { useState } from 'react'

const CreateButton = ({ content }: { content: JSX.Element }) => {
  const openModal = () => {
    Modal.info({
      title: 'Crear',
      content: content,
      centered: true,
      closable: true,
      bodyStyle: { overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' },
      cancelButtonProps: { style: { display: 'none' } },
      okButtonProps: { style: { display: 'none' } }
    })
  }

  return (
    <>
      <Button icon={<PlusOutlined />} shape="round" onClick={openModal}>
        Crear
      </Button>
    </>
  )
}

export default CreateButton
