export const errorsFirebase = code => {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'El email ya está en uso'

    case 'auth/invalid-email':
      return 'El email no es correcto'

    case 'auth/operation-not-allowed':
      return 'Operación no permitida'

    case 'auth/weak-password':
      return 'La contraseña es muy débil'

    case 'auth/wrong-password':
      return 'La contraseña es incorrecta'

    case 'auth/user-not-found':
      return 'El usuario no existe'

    case 'auth/invalid-password':
      return 'La contraseña no es correcta'

    case 'auth/user-disabled':
      return 'El usuario está deshabilitado'

    default:
      return 'Error desconocido'
  }
}
