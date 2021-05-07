import db from './index'

const auth = db.auth()

const createUserWithEmailAndPassword = async (email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password)
    const user = res.user
    await user.sendEmailVerification({
      url: `http://localhost:3000/react-video/login?email=${auth.currentUser.email}`,
    })
    return user
  } catch (err) {
    throw new Error(err)
  }
}

const signInWithEmailAndPassword = async (email, password) => {
  try {
    const res = await auth.signInWithEmailAndPassword(email, password)
    return res.user
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

export { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut }
