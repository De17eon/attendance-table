import vue from 'vue'
import vuex from 'vuex'

import auth from './auth'
import profile from './profile'

vue.use(vuex)

let store = new vuex.Store({
    state: {
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
                name: 'Архипов В. И.'
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
        visits: [
            {
                week: 1,
                subject: "Функциональное программирование",
                number_column: 1,
                student1: false,
                student2: false,
                student3: false,
                student4: false,
                student5: false,
                student6: false,
                student7: false,
                student8: false,
                student9: false,
                student10: false,
                student11: false,
                student12: false,
                student13: false,
                student14: false,
                student15: false,
                student16: false,
                student17: false,
                student18: false,
                student19: false,
                student20: false,
                student21: false,
            },
            {
                week: 1,
                subject: "Введение в Data Mining",
                number_column: 2,
                student1: false,
                student2: false,
                student3: false,
                student4: false,
                student5: false,
                student6: false,
                student7: false,
                student8: false,
                student9: false,
                student10: false,
                student11: false,
                student12: false,
                student13: false,
                student14: false,
                student15: false,
                student16: false,
                student17: false,
                student18: false,
                student19: false,
                student20: false,
                student21: false,
            },
            {
                week: 1,
                subject: "Введение в Data Mining",
                number_column: 3,
                student1: false,
                student2: false,
                student3: false,
                student4: false,
                student5: false,
                student6: false,
                student7: false,
                student8: false,
                student9: false,
                student10: false,
                student11: false,
                student12: false,
                student13: false,
                student14: false,
                student15: false,
                student16: false,
                student17: false,
                student18: false,
                student19: false,
                student20: false,
                student21: false,
            },
            {
                week: 1,
                subject: "Математическое моделирование",
                number_column: 4,
                student1: false,
                student2: false,
                student3: false,
                student4: false,
                student5: false,
                student6: false,
                student7: false,
                student8: false,
                student9: false,
                student10: false,
                student11: false,
                student12: false,
                student13: false,
                student14: false,
                student15: false,
                student16: false,
                student17: false,
                student18: false,
                student19: false,
                student20: false,
                student21: false,
            },
            {
                week: 1,
                subject: "Эконометрика",
                number_column: 5,
                student1: false,
                student2: false,
                student3: false,
                student4: false,
                student5: false,
                student6: false,
                student7: false,
                student8: false,
                student9: false,
                student10: false,
                student11: false,
                student12: false,
                student13: false,
                student14: false,
                student15: false,
                student16: false,
                student17: false,
                student18: false,
                student19: false,
                student20: false,
                student21: false,
            },
            {
                week: 1,
                subject: "Информационная безопасность",
                number_column: 6,
                student1: false,
                student2: false,
                student3: false,
                student4: false,
                student5: false,
                student6: false,
                student7: false,
                student8: false,
                student9: false,
                student10: false,
                student11: false,
                student12: false,
                student13: false,
                student14: false,
                student15: false,
                student16: false,
                student17: false,
                student18: false,
                student19: false,
                student20: false,
                student21: false,
            },
            {
                week: 1,
                subject: "Технологии разработки ПО",
                number_column: 7,
                student1: false,
                student2: false,
                student3: false,
                student4: false,
                student5: false,
                student6: false,
                student7: false,
                student8: false,
                student9: false,
                student10: false,
                student11: false,
                student12: false,
                student13: false,
                student14: false,
                student15: false,
                student16: false,
                student17: false,
                student18: false,
                student19: false,
                student20: false,
                student21: false,
            },
            {
                week: 1,
                subject: "Информационная безопасность",
                number_column: 8,
                student1: false,
                student2: false,
                student3: false,
                student4: false,
                student5: false,
                student6: false,
                student7: false,
                student8: false,
                student9: false,
                student10: false,
                student11: false,
                student12: false,
                student13: false,
                student14: false,
                student15: false,
                student16: false,
                student17: false,
                student18: false,
                student19: false,
                student20: false,
                student21: false,
            },
            {
                week: 1,
                subject: "Математическое моделирование",
                number_column: 9,
                student1: false,
                student2: false,
                student3: false,
                student4: false,
                student5: false,
                student6: false,
                student7: false,
                student8: false,
                student9: false,
                student10: false,
                student11: false,
                student12: false,
                student13: false,
                student14: false,
                student15: false,
                student16: false,
                student17: false,
                student18: false,
                student19: false,
                student20: false,
                student21: false,
            },
            {
                week: 1,
                subject: "Разработка веб-сервисов",
                number_column: 10,
                student1: false,
                student2: false,
                student3: false,
                student4: false,
                student5: false,
                student6: false,
                student7: false,
                student8: false,
                student9: false,
                student10: false,
                student11: false,
                student12: false,
                student13: false,
                student14: false,
                student15: false,
                student16: false,
                student17: false,
                student18: false,
                student19: false,
                student20: false,
                student21: false,
            },
            {
                week: 1,
                subject: "Разработка веб-сервисов",
                number_column: 11,
                student1: false,
                student2: false,
                student3: false,
                student4: false,
                student5: false,
                student6: false,
                student7: false,
                student8: false,
                student9: false,
                student10: false,
                student11: false,
                student12: false,
                student13: false,
                student14: false,
                student15: false,
                student16: false,
                student17: false,
                student18: false,
                student19: false,
                student20: false,
                student21: false,
            },
            {
                week: 1,
                subject: "Эконометрика",
                number_column: 12,
                student1: false,
                student2: false,
                student3: false,
                student4: false,
                student5: false,
                student6: false,
                student7: false,
                student8: false,
                student9: false,
                student10: false,
                student11: false,
                student12: false,
                student13: false,
                student14: false,
                student15: false,
                student16: false,
                student17: false,
                student18: false,
                student19: false,
                student20: false,
                student21: false,
            },
            {
                week: 1,
                subject: "Компьютерные издательские системы",
                number_column: 13,
                student1: false,
                student2: false,
                student3: false,
                student4: false,
                student5: false,
                student6: false,
                student7: false,
                student8: false,
                student9: false,
                student10: false,
                student11: false,
                student12: false,
                student13: false,
                student14: false,
                student15: false,
                student16: false,
                student17: false,
                student18: false,
                student19: false,
                student20: false,
                student21: false,
            },
            {
                week: 1,
                subject: "Компьютерные издательские системы",
                number_column: 14,
                student1: false,
                student2: false,
                student3: false,
                student4: false,
                student5: false,
                student6: false,
                student7: false,
                student8: false,
                student9: false,
                student10: false,
                student11: false,
                student12: false,
                student13: false,
                student14: false,
                student15: false,
                student16: false,
                student17: false,
                student18: false,
                student19: false,
                student20: false,
                student21: false,
            },

        ]
    },
    mutations: {

    },
    actions: {


    },
    getters: {
        SUBJECTS(state) {
            return state.subjects
        },
        STUDENTS(state){
            return state.students
        },
        VISITS(state) {
            return state.visits
        }

    },
    modules: {
      auth,
      profile
    }
})


export default store;
