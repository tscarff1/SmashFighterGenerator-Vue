export const Settings = {
    state: {
        listView: 'SERIES'
    },
    mutations: {
        setListView(state, view) {
            state.listView = view;
        }
    },
    actions: {
        setListView: ({commit},view) => {
            commit('setListView', view);
        }
    }
}