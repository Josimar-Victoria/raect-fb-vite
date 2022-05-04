export const errorsFirebase = code => {
  switch (code) {
    case 'auth/email-already-in-use':
      return {
        code: "email",
        message: 'El email ya está en uso'
      }
     
    case 'auth/invalid-email':
      return {
        code: "email",
        message: 'El email no es válido'
      }

    case 'auth/operation-not-allowed':
      return {
        code: "email",
        message: 'Operación no permitida'
      }

    case 'auth/user-disabled':
      return {
        code: "email",
        message: 'El usuario está deshabilitado'
      }
    case 'auth/user-not-found':
      return {
        code: "email",
        message: 'El usuario no existe'
      }
    case 'auth/weak-password':
      return {
        code: "password",
        message: 'La contraseña es muy débil'
      }

    case 'auth/wrong-password':
      return {
        code: "password",
        message: 'La contraseña es incorrecta'
      }

    case 'auth/invalid-password':
      return {
        code: "password",
        message: 'La contraseña no es válida'
      }

    default:
      return 'Error desconocido'
  }
}
