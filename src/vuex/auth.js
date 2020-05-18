import firebase from 'firebase/app'

export default {
  state: {
    app_user: null
  },
  mutations: {
  },
  actions: {
    getUId() {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
    async register({dispatch},{email, password, name, surname, patronymic, group}) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('getUId')
        await firebase.database().ref(`/users/${uid}/profile`).set({
          name,
          surname,
          patronymic,
          group
        })
      } catch (e) { 
        console.log(e)
      }
    },
    async login({dispatch, commit},{email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        throw e
      }
    },
    async logout({commit}) {
      await firebase.auth().signOut()
      commit('clearProfile')
    }
  }
}
