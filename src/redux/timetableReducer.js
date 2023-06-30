import tech1 from '../assets/img/teach1.png' 
import tech2 from '../assets/img/teach2.png' 
import tech3 from '../assets/img/teach3.png' 
import tech4 from '../assets/img/teach4.png'  
import tech5 from '../assets/img/tech5.png'  
import tech6 from '../assets/img/tech6.png'
import tech7 from '../assets/img/tech7.png'
let initialState = {
    timetable: {   
      id:2,
      alldate: ['23 янв','24 янв','25 янв','26 янв','27 янв','28 янв','29 янв'],
      monday: [
          {   
              time: "15:00",
              teach: "Зуева Ольга",
              subj: "Математика",
              backgroundColor: "#C5FFCA", 
              btc: "#AFFFB7",
          },
          {
              time: "19:00",
              teach: "Ольга Петровна",
              subj: "Химия",
              backgroundColor: "#FFF1A1",
              btc: "#FFEC7E",
          }, 
      ],
      tuesday: [ 
          {
              time: "16:00",
              teach: "Борис Николаевич",
              subj: "Русcкий язык",
              backgroundColor: "#CCFFFF",
              btc: "#9fffff",
            }, 
            {
              time: "19:00",
              teach: "Сергей Павлович",
              subj: "Физика",
              backgroundColor: "#C5FFCA",
              btc: "#AFFFB7",
            }
      ],
      wednesday: [ 
          {
              time: "15:00",
              teach: "Зуева Ольга",
              subj: "Математика",
              backgroundColor: "#FFF1A1",
              btc: "#FFEC7E",
            },
      ],
      thursday: [ 
          {
              time: "19:00",
              teach: "Ольга Петровна",
              subj: "Химия",
              backgroundColor: "#CCFFFF",
              btc: "#9fffff",
            },
      ],
      friday: [],
      saturday: [  
          {
          time: "15:00",
          teach: "Георгий Константинович",
          subj: "История",
          backgroundColor: "#FFF1A1",
          btc: "#FFEC7E",
        }, 
      ], 
      sunday: [ 
          {
          time: "12:00",
          teach: "Сергей Павлович",
          subj: "Физика",
          backgroundColor: "#C5FFCA",
          btc: "#AFFFB7",
        }, 
      ]
    },  
    currentTeacher:[]
} 
const SET_NEW_TIMETABEL_DATA = 'SET_NEW_TIMETABEL_DATA'  
const SET_NEW_TIMETABEL_TEACHER = 'SET_NEW_TIMETABEL_TEACHER' 
export const timetableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_TIMETABEL_DATA:{ 
            return{ 
                ...state, 
                timetable: action.data
            }
        }  
        case SET_NEW_TIMETABEL_TEACHER:{ 
          return{...state, currentTeacher:action.data}
        }
        default: 
        return state
    }
}  

export const setNewTimetableAC = (data) =>({type:SET_NEW_TIMETABEL_DATA, data})  
const getCurrentTeacherAC = (data) =>({type:SET_NEW_TIMETABEL_TEACHER, data}) 
const teacherInfo=[ 
  {name :'Зуева Ольга', title:'Преподаватель старших классов по математике СШГ №43. Более 9 лет обучает детей высшей математике. Имеет ряд наград за участие в развитии математики как науки.', subj: 'Математика', photo:tech6}, 
  {name :'Ольга Петровна', title:'Преподаватель старших классов по химии СШГ №143. Более 19 лет обучает детей химии. Имеет ряд наград за участие в развитии химии как науки.', subj: 'Химия',photo:tech4},  
  {name :'Сергей Павлович', title:'Преподаватель старших классов по физике СШГ №103. Более 5 лет обучает детей физике. Имеет ряд наград за участие в развитии физики как науки.', subj: 'Физика',photo:tech1},  
  {name :'Борис Николаевич', title:'Преподаватель старших классов по русскому языку СШГ №58. Более 11 лет обучает детей русскому языку. Имеет ряд наград за участие в развитии русского языка.', subj: 'Русский язык',photo:tech2},   
  {name :'Георгий Константинович', title:'Преподаватель старших классов по истории СШГ №3. Более 17 лет обучает детей истории. Имеет ряд наград за участие в развитии истории.', subj: 'История',photo:tech3}, 
  {name :'Галина Сергеевна', title:'Преподаватель старших классов по биологии СШГ №36. Более 5 лет обучает детей биологии. Имеет ряд наград за участие в развитии биологии как науки.', subj: 'Биология',photo:tech7},  
  {name :'Татьяна Петровна', title:'Преподаватель старших классов по английскому языку СШГ №6. Более 25 лет обучает детей английскому языку. Имеет ряд наград за участие в развитии английского языка.', subj: 'Английский язык',photo:tech5}, 
] 
export const setCurrentTeacherTC = (name) => (dispatch)=>{ 
  const user = teacherInfo.find(obj => obj.name === name);
  return dispatch(getCurrentTeacherAC(user))
}   






































export const testData3 = { 
        id:3,
        alldate: ['30 янв','31 янв','1 фев','2 фев','2 фев','4 фев','5 фев'],
        monday: [
            {   
                time: "16:00",
                teach: "Татьяна Петровна",
                subj: "Английский язык",
                backgroundColor: "#C5FFCA", 
                btc: "#AFFFB7",
            },
            {
                time: "19:00",
                teach: "Борис Николаевич",
                subj: "Русский язык",
                backgroundColor: "#FFF1A1",
                btc: "#FFEC7E",
            },  
        ],
        tuesday: [ 
            {
                time: "16:00",
                teach: "Борис Николаевич",
                subj: "Русcкий язык",
                backgroundColor: "#C5FFCA",
                btc: "#AFFFB7",
              }, 
        ],
        wednesday: [ 
            {
                time: "13:00",
                teach: "Зуева Ольга",
                subj: "Математика",
                backgroundColor: "#FFF1A1",
                btc: "#FFEC7E",
              }, 
              {
                time: "15:00",
                teach: "Алексей Борисович",
                subj: "Биология",
                backgroundColor: "#C5FFCA",
                btc: "#AFFFB7",
              }, 
              {
                time: "17:00",
                teach:  "Георгий Константинович",
                subj: "История",
                backgroundColor: "#CCFFFF",
                btc: "#9fffff",
              }, 
              {
                time: "19:00",
                teach: "Борис Николаевич",
                subj: "Русский язык",
                backgroundColor: "#FFF1A1",
                btc: "#FFEC7E",
              }, 
              {
                time: "21:00",
                teach: "Зуева Ольга",
                subj: "Математика",
                backgroundColor: "#C5FFCA",
                btc: "#AFFFB7",
              },
        ],
        thursday: [ 
        ],
        friday: [],
        saturday: [  
            {
            time: "19:00",
            teach: "Георгий Константинович",
            subj: "История",
            backgroundColor: "#FFF1A1",
            btc: "#FFEC7E",
          }, 
        ], 
        sunday: [ 
            {
            time: "12:00",
            teach:  "Георгий Константинович",
            subj: "История",
            backgroundColor: "#C5FFCA",
            btc: "#AFFFB7",
          }, 
        ]
    
} 
export const testData1 = { 
    id:1,
    alldate: ['16 янв','17 янв','18 янв','19 янв','20 янв','21 янв','22 янв'],
    monday: [
        {   
            time: "16:00",
            teach: "Татьяна Петровна",
            subj: "Английский язык",
            backgroundColor: "#C5FFCA", 
            btc: "#AFFFB7",
        },
        {
            time: "19:00",
            teach: "Борис Николаевич",
            subj: "Русский язык",
            backgroundColor: "#FFF1A1",
            btc: "#FFEC7E",
        },  
       
    ],
    tuesday: [ 
        {
            time: "16:00",
            teach: "Борис Николаевич",
            subj: "Русcкий язык",
            backgroundColor: "#C5FFCA",
            btc: "#AFFFB7",
          },  
        
    ],
    wednesday: [ 
        {
            time: "13:00",
            teach: "Зуева Ольга",
            subj: "Математика",
            backgroundColor: "#FFF1A1",
            btc: "#FFEC7E",
          }, 
          {
            time: "15:00",
            teach: "Алексей Борисович",
            subj: "Биология",
            backgroundColor: "#C5FFCA",
            btc: "#AFFFB7",
          }, 
          {
            time: "17:00",
            teach:  "Георгий Константинович",
            subj: "История",
            backgroundColor: "#CCFFFF",
            btc: "#9fffff",
          }, 
          
    ],
    thursday: [ 
    ],
    friday: [ 
        {
            time: "19:00",
            teach:"Борис Николаевич",
            subj: "Русский язык",
            backgroundColor: "#FFF1A1",
            btc: "#FFEC7E",
          }, 
          {
            time: "21:00",
            teach: "Зуева Ольга",
            subj: "Математика",
            backgroundColor: "#C5FFCA",
            btc: "#AFFFB7",
          },
    ],
    saturday: [  
             {
        time: "12:00",
        teach:  "Георгий Константинович",
        subj: "История",
        backgroundColor: "#C5FFCA",
        btc: "#AFFFB7",
      }, 
    ], 
    sunday: [ 
    
      {
        time: "19:00",
        teach: "Георгий Константинович",
        subj: "История",
        backgroundColor: "#FFF1A1",
        btc: "#FFEC7E",
      }, 
    ]

} 
export  const testData2 = { 
        id:2,
        alldate: ['23 янв','24 янв','25 янв','26 янв','27 янв','28 янв','29 янв'],
        monday: [
            {   
                time: "15:00",
                teach: "Зуева Ольга",
                subj: "Математика",
                backgroundColor: "#C5FFCA", 
                btc: "#AFFFB7",
            },
            {
                time: "19:00",
                teach: "Ольга Петровна",
                subj: "Химия",
                backgroundColor: "#FFF1A1",
                btc: "#FFEC7E",
            }, 
        ],
        tuesday: [ 
            {
                time: "16:00",
                teach: "Борис Николаевич",
                subj: "Русcкий язык",
                backgroundColor: "#CCFFFF",
                btc: "#9fffff",
              }, 
              {
                time: "19:00",
                teach: "Сергей Павлович",
                subj: "Физика",
                backgroundColor: "#C5FFCA",
                btc: "#AFFFB7",
              }
        ],
        wednesday: [ 
            {
                time: "15:00",
                teach: "Зуева Ольга",
                subj: "Математика",
                backgroundColor: "#FFF1A1",
                btc: "#FFEC7E",
              },
        ],
        thursday: [ 
            {
                time: "19:00",
                teach: "Ольга Петровна",
                subj: "Химия",
                backgroundColor: "#CCFFFF",
                btc: "#9fffff",
              },
        ],
        friday: [],
        saturday: [  
            {
            time: "15:00",
            teach: "Георгий Константинович",
            subj: "История",
            backgroundColor: "#FFF1A1",
            btc: "#FFEC7E",
          }, 
        ], 
        sunday: [ 
            {
            time: "12:00",
            teach: "Сергей Павлович",
            subj: "Физика",
            backgroundColor: "#C5FFCA",
            btc: "#AFFFB7",
          }, 
        ]
    
}