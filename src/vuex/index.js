import vue from 'vue'
import vuex from 'vuex'

import auth from './auth'
import profile from './profile'

import firebase from 'firebase/app'

vue.use(vuex)

function createColumnName(num) {
  let name = 'column'
  if (String(num).length == 1) {
    name += 0
  }
  name += num
  return name
}

let store = new vuex.Store({
  state: {
    interfaceWeek: 'week1',
    activeColumn: '',
    manyActiveColumn: [],
    transferColumn: '',
    arrayOfValuesCel: ['n', 'y', 'r'], 
    subjects: [
      {
        day_week: 1,
        subject: "Функциональное программирование",
        number_column: 1
      },
      {
        day_week: 1,
        subject: "Введение в Data Mining",
        number_column: 2
      },
      {
        day_week: 1,
        subject: "Введение в Data Mining",
        number_column: 3
      },
      {
        day_week: 2,
        subject: "Математическое моделирование",
        number_column: 4
      },
      {
        day_week: 2,
        subject: "Эконометрика",
        number_column: 5
      },
      {
        day_week: 2,
        subject: "Информационная безопасность",
        number_column: 6
      },
      {
        day_week: 2,
        subject: "Технологии разработки ПО",
        number_column: 7
      },
      {
        day_week: 3,
        subject: "Информационная безопасность",
        number_column: 8
      },
      {
        day_week: 3,
        subject: "Математическое моделирование",
        number_column: 9
      },
      {
        day_week: 3,
        subject: "Разработка веб-сервисов",
        number_column: 10
      },
      {
        day_week: 3,
        subject: "Разработка веб-сервисов",
        number_column: 11
      },
      {
        day_week: 4,
        subject: "Эконометрика",
        number_column: 12
      },
      {
        day_week: 4,
        subject: "Компьютерные издательские системы",
        number_column: 13
      },
      {
        day_week: 4,
        subject: "Компьютерные издательские системы",
        number_column: 14
      },
    ],
    students: [
      {
        number: 1,
        name: 'Архипов Владислав Игоревич'
      },
      {
        number: 2,
        name: 'Демьянов Леонид Олегович'
      },
      {
        number: 3,
        name: 'Загузин Дмитрий Александрович'
      },
      {
        number: 4,
        name: 'Закаулова Дарья Дмитриевна'
      },
      {
        number: 5,
        name: 'Зданович Дмитрий Алексеевич'
      },
      {
        number: 6,
        name: 'Карноухов Семен Александрович'
      },
      {
        number: 7,
        name: 'Карпов Егор Вадимович'
      },
      {
        number: 8,
        name: 'Катышев Артем Владимирович'
      },
      {
        number: 9,
        name: 'Козлов Алексей Александрович'
      },
      {
        number: 10,
        name: 'Мирошниченко Александр Денисович'
      },
      {
        number: 11,
        name: 'Новикова Алина Александровна'
      },
      {
        number: 12,
        name: 'Разуваев Михаил Сергеевич'
      },
      {
        number: 13,
        name: 'Стронский Андрей Игоревич'
      },
      {
        number: 14,
        name: 'Суздалев Руслан Анатольевич'
      },
      {
        number: 15,
        name: 'Томшин Артур Андреевич'
      },
      {
        number: 16,
        name: 'Халатян Мери Левоновна'
      },
      {
        number: 17,
        name: 'Ходжиев Александр Ходжимахмадович'
      },
      {
        number: 18,
        name: 'Циберман Николай Юрьевич'
      },
      {
        number: 19,
        name: 'Черепанов Игорь Андреевич'
      },
      {
        number: 20,
        name: 'Шубин Дмитрий Александрович'
      },
      {
        number: 21,
        name: 'Якимчук Артур Игоревич'
      },
    ],
    visits: {
      week1: {
        column01: {
          student01: 'n',
          student02: 'n',
          student03: 'n',
          student04: 'n',
          student05: 'n',
          student06: 'n',
          student07: 'n',
          student08: 'n',
          student09: 'n',
          student10: 'n',
          student11: 'n',
          student12: 'n',
          student13: 'n',
          student14: 'n',
          student15: 'n',
          student16: 'n',
          student17: 'n',
          student18: 'n',
          student19: 'n',
          student20: 'n',
          student21: 'n',
        },
        column02: {
          student01: 'n',
          student02: 'n',
          student03: 'n',
          student04: 'n',
          student05: 'n',
          student06: 'n',
          student07: 'n',
          student08: 'n',
          student09: 'n',
          student10: 'n',
          student11: 'n',
          student12: 'n',
          student13: 'n',
          student14: 'n',
          student15: 'n',
          student16: 'n',
          student17: 'n',
          student18: 'n',
          student19: 'n',
          student20: 'n',
          student21: 'n',
        },
        column03: {
          student01: 'n',
          student02: 'n',
          student03: 'n',
          student04: 'n',
          student05: 'n',
          student06: 'n',
          student07: 'n',
          student08: 'n',
          student09: 'n',
          student10: 'n',
          student11: 'n',
          student12: 'n',
          student13: 'n',
          student14: 'n',
          student15: 'n',
          student16: 'n',
          student17: 'n',
          student18: 'n',
          student19: 'n',
          student20: 'n',
          student21: 'n',
        },
        column04: {
          student01: 'n',
          student02: 'n',
          student03: 'n',
          student04: 'n',
          student05: 'n',
          student06: 'n',
          student07: 'n',
          student08: 'n',
          student09: 'n',
          student10: 'n',
          student11: 'n',
          student12: 'n',
          student13: 'n',
          student14: 'n',
          student15: 'n',
          student16: 'n',
          student17: 'n',
          student18: 'n',
          student19: 'n',
          student20: 'n',
          student21: 'n',
        },
        column05: {
          student01: 'n',
          student02: 'n',
          student03: 'n',
          student04: 'n',
          student05: 'n',
          student06: 'n',
          student07: 'n',
          student08: 'n',
          student09: 'n',
          student10: 'n',
          student11: 'n',
          student12: 'n',
          student13: 'n',
          student14: 'n',
          student15: 'n',
          student16: 'n',
          student17: 'n',
          student18: 'n',
          student19: 'n',
          student20: 'n',
          student21: 'n',
        },
        column06: {
          student01: 'n',
          student02: 'n',
          student03: 'n',
          student04: 'n',
          student05: 'n',
          student06: 'n',
          student07: 'n',
          student08: 'n',
          student09: 'n',
          student10: 'n',
          student11: 'n',
          student12: 'n',
          student13: 'n',
          student14: 'n',
          student15: 'n',
          student16: 'n',
          student17: 'n',
          student18: 'n',
          student19: 'n',
          student20: 'n',
          student21: 'n',
        },
        column07: {
          student01: 'n',
          student02: 'n',
          student03: 'n',
          student04: 'n',
          student05: 'n',
          student06: 'n',
          student07: 'n',
          student08: 'n',
          student09: 'n',
          student10: 'n',
          student11: 'n',
          student12: 'n',
          student13: 'n',
          student14: 'n',
          student15: 'n',
          student16: 'n',
          student17: 'n',
          student18: 'n',
          student19: 'n',
          student20: 'n',
          student21: 'n',
        },
        column08: {
          student01: 'n',
          student02: 'n',
          student03: 'n',
          student04: 'n',
          student05: 'n',
          student06: 'n',
          student07: 'n',
          student08: 'n',
          student09: 'n',
          student10: 'n',
          student11: 'n',
          student12: 'n',
          student13: 'n',
          student14: 'n',
          student15: 'n',
          student16: 'n',
          student17: 'n',
          student18: 'n',
          student19: 'n',
          student20: 'n',
          student21: 'n',
        },
        column09: {
          student01: 'n',
          student02: 'n',
          student03: 'n',
          student04: 'n',
          student05: 'n',
          student06: 'n',
          student07: 'n',
          student08: 'n',
          student09: 'n',
          student10: 'n',
          student11: 'n',
          student12: 'n',
          student13: 'n',
          student14: 'n',
          student15: 'n',
          student16: 'n',
          student17: 'n',
          student18: 'n',
          student19: 'n',
          student20: 'n',
          student21: 'n',
        },
        column10: {
          student01: 'n',
          student02: 'n',
          student03: 'n',
          student04: 'n',
          student05: 'n',
          student06: 'n',
          student07: 'n',
          student08: 'n',
          student09: 'n',
          student10: 'n',
          student11: 'n',
          student12: 'n',
          student13: 'n',
          student14: 'n',
          student15: 'n',
          student16: 'n',
          student17: 'n',
          student18: 'n',
          student19: 'n',
          student20: 'n',
          student21: 'n',
        },
        column11: {
          student01: 'n',
          student02: 'n',
          student03: 'n',
          student04: 'n',
          student05: 'n',
          student06: 'n',
          student07: 'n',
          student08: 'n',
          student09: 'n',
          student10: 'n',
          student11: 'n',
          student12: 'n',
          student13: 'n',
          student14: 'n',
          student15: 'n',
          student16: 'n',
          student17: 'n',
          student18: 'n',
          student19: 'n',
          student20: 'n',
          student21: 'n',
        },
        column12: {
          student01: 'n',
          student02: 'n',
          student03: 'n',
          student04: 'n',
          student05: 'n',
          student06: 'n',
          student07: 'n',
          student08: 'n',
          student09: 'n',
          student10: 'n',
          student11: 'n',
          student12: 'n',
          student13: 'n',
          student14: 'n',
          student15: 'n',
          student16: 'n',
          student17: 'n',
          student18: 'n',
          student19: 'n',
          student20: 'n',
          student21: 'n',
        },
        column13: {
          student01: 'n',
          student02: 'n',
          student03: 'n',
          student04: 'n',
          student05: 'n',
          student06: 'n',
          student07: 'n',
          student08: 'n',
          student09: 'n',
          student10: 'n',
          student11: 'n',
          student12: 'n',
          student13: 'n',
          student14: 'n',
          student15: 'n',
          student16: 'n',
          student17: 'n',
          student18: 'n',
          student19: 'n',
          student20: 'n',
          student21: 'n',
        },
        column14: {
          student01: 'n',
          student02: 'n',
          student03: 'n',
          student04: 'n',
          student05: 'n',
          student06: 'n',
          student07: 'n',
          student08: 'n',
          student09: 'n',
          student10: 'n',
          student11: 'n',
          student12: 'n',
          student13: 'n',
          student14: 'n',
          student15: 'n',
          student16: 'n',
          student17: 'n',
          student18: 'n',
          student19: 'n',
          student20: 'n',
          student21: 'n',
        } 
      },
    },
    visitTemaplate: {
      student01: 'n',
      student02: 'n',
      student03: 'y',
      student04: 'y',
      student05: 'n',
      student06: 'y',
      student07: 'y',
      student08: 'n',
      student09: 'y',
      student10: 'y',
      student11: 'n',
      student12: 'n',
      student13: 'y',
      student14: 'y',
      student15: 'n',
      student16: 'y',
      student17: 'n',
      student18: 'y',
      student19: 'y',
      student20: 'y',
      student21: 'y',
    }
  },
  mutations: {
    ChangeCellValue(state, cellData) {
      const cur = state.visits[state.interfaceWeek][cellData.columnN][cellData.studentN]
      const num = state.arrayOfValuesCel.indexOf(cur)
      state.visits[state.interfaceWeek][cellData.columnN][cellData.studentN] = state.arrayOfValuesCel[(num + 1) % 3]
    },
    ChangeActiveColumn(state, columnN) {
      state.manyActiveColumn = []
      state.activeColumn = columnN
    },
    toActiveVisitTemplate(state) {
      if (state.manyActiveColumn.length != 0) {
        const arr = state.manyActiveColumn
        arr.forEach(function(item) {
          let columnN = createColumnName(item)
          for (let key in state.visits[state.interfaceWeek][columnN]) {
            state.visits[state.interfaceWeek][columnN][key] = state.visitTemaplate[key]
          }
          state.manyActiveColumn = []
        }); 
      } else if (state.activeColumn != '') {
        let columnN = createColumnName(state.activeColumn)

        for (let key in state.visits[state.interfaceWeek][columnN]) {
          state.visits[state.interfaceWeek][columnN][key] = state.visitTemaplate[key]
        }
        state.activeColumn = ''
      }
    },
    clearTable(state) {
      for (let key in state.visits[state.interfaceWeek]) {
        for(let key2 in state.visits[state.interfaceWeek][key]) {
          state.visits[state.interfaceWeek][key][key2] = 'n'
        }
      }
    },
    clickClearColumn(state) {
      if (state.manyActiveColumn.length != 0) {
        const arr = state.manyActiveColumn
        arr.forEach(function(item) {
          let columnN = createColumnName(item)
          for (let key in state.visits[state.interfaceWeek][columnN]) {
            state.visits[state.interfaceWeek][columnN][key] = 'n'
          }
          state.manyActiveColumn = []
        }); 
      } else if (state.activeColumn != '') {
        let columnN = createColumnName(state.activeColumn)
        for (let key in state.visits[state.interfaceWeek][columnN]) {
          state.visits[state.interfaceWeek][columnN][key] = 'n'
        }
        state.activeColumn = ''
      }
    },
    toTransferColumn(state) {
      if (state.activeColumn != '') {
        state.transferColumn = state.activeColumn
        state.activeColumn = ''
        state.waiting = 'transfer'
      }
    },
    toFill(state) {
      if (state.manyActiveColumn.length != 0) {
        const columnT = createColumnName(state.transferColumn)
        const arr = state.manyActiveColumn
        arr.forEach(function(item) {
          const columnN = createColumnName(item)
          for (let key in state.visits[state.interfaceWeek][columnN]) {
            state.visits[state.interfaceWeek][columnN][key] = state.visits[state.interfaceWeek][columnT][key]
          }
          state.manyActiveColumn = []
        }); 
      } else if (state.activeColumn != '') {
        const columnT = createColumnName(state.transferColumn)
        const columnN = createColumnName(state.activeColumn)
        for (let key in state.visits[state.interfaceWeek][columnN]) {
          state.visits[state.interfaceWeek][columnN][key] = state.visits[state.interfaceWeek][columnT][key]
        }
        state.activeColumn = ''
      }
    },
    updateVisits(state, serverData) {
      state.visits[state.interfaceWeek] = serverData
    },
    columnSelection(state, columnN) {
      if (state.activeColumn != '' && state.manyActiveColumn.length == 0) {
        const a = state.activeColumn
        state.activeColumn = ''
        let tempArray = []
        if (a < columnN) {
          for (let i = a; i <= columnN; i++) {
            tempArray.push(i)
            state.manyActiveColumn = tempArray
          }
        } else if (a > columnN) {
          for (let i = columnN; i <= a; i++) {
            tempArray.push(i)
            state.manyActiveColumn = tempArray
          }
        }
      } else if (state.manyActiveColumn.length == 0) {
        state.activeColumn = ''
        state.manyActiveColumn.push(columnN)
      } else if (state.manyActiveColumn.length == 1) {
        state.activeColumn = ''
        const a = state.manyActiveColumn[0]
        let tempArray = []
        if (a < columnN) {
          for (let i = a; i <= columnN; i++) {
            tempArray.push(i)
            state.manyActiveColumn = tempArray
          }
        } else if (a > columnN) {
          for (let i = columnN; i <= a; i++) {
            tempArray.push(i)
            state.manyActiveColumn = tempArray
          }
        }
      } else {
        state.manyActiveColumn = []
        state.activeColumn = ''
      }
    }
  },
  actions: {
    async saveTable() {
      const weekN = this.getters.INTERFACE_WEEK
      const v = this.getters.VISITS
      console.log(v)
      try {
        await firebase.database().ref().child(`visits/${weekN}`).set(v)
      } catch (e) { 
        console.log('saveTable', e)
      }
    },
    async loadTable({commit}) {
      const weekN = this.getters.INTERFACE_WEEK
      try {
        const serverData = (await firebase.database().ref(`visits/${weekN}`).once('value')).val()
        commit('updateVisits', serverData)
      } catch (e) {
        console.log('loadTable', e)
      }
    }
  },
  getters: {
    SUBJECTS(state) {
      return state.subjects
    },
    STUDENTS(state){
      return state.students
    },
    ACTIVECOLUMN(state) {
      return state.activeColumn
    },
    TRANSFERCOLUMN(state) {
      return state.transferColumn
    },
    MANY_ACTIVE_COLUMN(state) {
      return state.manyActiveColumn
    },
    VISIT_IN_CELL: state => (dataN) => {
      return state.visits[state.interfaceWeek][dataN.columnN][dataN.studentN]
    },
    INTERFACE_WEEK(state) {
      return state.interfaceWeek
    },
    VISITS(state) {
      return state.visits[state.interfaceWeek]
    },
    GEN_SUBJECTS(state) {
      return state.generSubjects
    },
    GEN_STUDENTS(state){
      return state.generStudents
    },
  },
  modules: {
    auth,
    profile,
  }
})


export default store;
