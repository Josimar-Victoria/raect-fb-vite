import React from 'react'

const FormError = ({ errors }) => {
  return <>{errors && <p>{errors.message}</p>}</>
}

export default FormError