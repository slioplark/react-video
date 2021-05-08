import db from './index'

const auth = db.auth()

const createUser = async (email, password) => {
  try {
    const cred = await auth.createUserWithEmailAndPassword(email, password)
    const user = cred.user
    await user.sendEmailVerification()

    return user
  } catch (err) {
    throw new Error(err)
  }
}

const signIn = async (email, password) => {
  try {
    const cred = await auth.signInWithEmailAndPassword(email, password)
    const user = cred.user

    return user
  } catch (err) {
    throw new Error(err)
  }
}

const signOut = async () => {
  try {
    await auth.signOut()
  } catch (err) {
    throw new Error(err)
  }
}

const verifyEmail = async (actionCode) => {
  try {
    await auth.applyActionCode(actionCode)
  } catch (err) {
    throw new Error(err)
  }
}

const resetPassword = async (actionCode, newPassword) => {
  try {
    await auth.verifyPasswordResetCode(actionCode)
    await auth.confirmPasswordReset(actionCode, newPassword)
  } catch (err) {
    throw new Error(err)
  }
}

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email)
  } catch (err) {
    throw new Error(err)
  }
}

export {
  signIn,
  signOut,
  createUser,
  verifyEmail,
  resetPassword,
  sendPasswordResetEmail,
}
