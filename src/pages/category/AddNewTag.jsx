import React from 'react'
import Header from '../../ui/header/Header'
import AddTagForm from '../../components/category/AddTagForm'

const AddNewTag = () => {
  return (
    <div className="p-7 flex flex-col h-full">
      <Header title="Add New Category" />

      <AddTagForm />
    </div>
  )
}

export default AddNewTag