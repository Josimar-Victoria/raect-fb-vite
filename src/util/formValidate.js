export const formValidate = () => {
  return {
    required: {
      value: true,
      message: 'Campo obrigatório'
    },
    patternEmail: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Formato de email incorrecto'
    },
    minLength: {
      value: 6,
      message: 'La contraseña debe tener al menos 6 caracteres'
    },
    validateTrim: {
      trim: value => {
        if (!value.trim()) {
          return 'Campo obligatorio'
        }
        return true
      }
    },
    validateEquals (value) {
      return {
        confirmPassword: v => v === value || 'Las contraseñas no coinciden'
      }
    }
  }
}
