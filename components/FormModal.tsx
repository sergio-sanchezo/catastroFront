import { Modal } from 'antd'
import React from 'react'

const FormModal = ({ open, title, isUpdate }: { open: boolean; title: string; isUpdate: boolean }) => {
  return <Modal open={open} title={title}></Modal>
}

export default FormModal
