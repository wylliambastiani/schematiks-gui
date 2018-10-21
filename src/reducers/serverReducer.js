

let initialServerListState = 
  [
    {
      id: 1,
      name: 'Servidor de DEV',
      isSelectedOnMenu: false
    },
    {
      id: 2,
      name: 'Servidor de DEV 2',
      isSelectedOnMenu: false
    },
    {
      id: 3,
      name: 'Servidor de HML',
      isSelectedOnMenu: false
    },
    {
      id: 4,
      name: 'Servidor de HML 2',
      isSelectedOnMenu: false
    },
    {
      id: 5,
      name: 'Servidor de PROD',
      isSelectedOnMenu: false
    },
    {
      id: 6,
      name: 'Servidor de PROD 2',
      isSelectedOnMenu: false
    },
    {
      id: 7,
      name: 'Servidor de DEV',
      isSelectedOnMenu: false
    },
    {
      id: 8,
      name: 'Servidor de DEV 2',
      isSelectedOnMenu: false
    },
    {
      id: 9,
      name: 'Servidor de HML',
      isSelectedOnMenu: false
    },
    {
      id: 10,
      name: 'Servidor de HML 2',
      isSelectedOnMenu: false
    },
    {
      id: 11,
      name: 'Servidor de PROD',
      isSelectedOnMenu: false
    },
    {
      id: 12,
      name: 'Servidor de PROD 2',
      isSelectedOnMenu: false
    },
    {
      id: 13,
      name: 'Servidor de PROD',
      isSelectedOnMenu: false
    },
    {
      id: 14,
      name: 'Servidor de PROD 2 vrau',
      isSelectedOnMenu: false
    },
  ];

export const serverReducer = (state = initialServerListState, action) => {
  
  switch (action.type) {
    case 'SELECTED_SERVER_ON_MENU':
      return state.map(s => {
        if (s.id !== action.id)
          return { ...s, isSelectedOnMenu: false };

        return {
          ...s,
          isSelectedOnMenu: true
        }
      });

    default:
      return state;
  }
}