import firebase from 'firebase/app'

export default {
  state: {
    profile: {}
  },
  mutations: {
    setProfile(state, info) {
      state.profile = info
    },
    clearProfile(state) {
      state.profile = {}
    }
  },
  actions: {
    async fetchProfile({dispatch, commit}) {
      try {
        const uid = await dispatch('getUId')
        const info = (await firebase.database().ref(`users/${uid}/profile`).once('value')).val()
        console.log(info)
        commit('setProfile', info)
      } catch (e) {
        console.log('profile.js', e)
      }
    }
  },
  getters: {
    PROFILE: s => s.profile
  }
}
