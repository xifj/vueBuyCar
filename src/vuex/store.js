// jshint esversion: 6
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//需要维护的状态
const state = {
    notes: [],
    activeNote: {},
    show: '',
    buyCar: 0,
    proList: [
        {'proName': 'proName1','proId': 0, 'proNum': 10,'car': 0},
        {'proName': 'proName2','proId': 1, 'proNum': 10,'car': 0},
        {'proName': 'proName3','proId': 2, 'proNum': 10,'car': 0},
        {'proName': 'proName4','proId': 3, 'proNum': 10,'car': 0},
        {'proName': 'proName5','proId': 4, 'proNum': 10,'car': 0},
        {'proName': 'proName6','proId': 5, 'proNum': 10,'car': 0},
        {'proName': 'proName7','proId': 6, 'proNum': 10,'car': 0},
        {'proName': 'proName8','proId': 7, 'proNum': 10,'car': 0},
        {'proName': 'proName9','proId': 8, 'proNum': 10,'car': 0}
    ],
    detail: {}
}

// 使用mutation去设置state
/**
 * 初始化
 * 增加笔记
 * 修改笔记
 * 删除笔记
 * 笔记收藏
 * ------
 * 笔记的显示和隐藏
 * ------
 * 设置当前激活的笔记
 */

Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
    this.splice(index, 1);
    }
};
const mutations = {
    initNote (state, data) {
        state.notes = data.notes
        state.show = data.show
        state.activeNote = data.activeNote
    },
    newNote (state) {
        let newNote = {
            id: +new Date(),
            title: '',
            content: '',
            favorite: false
        }
        state.notes.push(newNote)
        state.activeNote = newNote
    },
    editNote (state, payload) {
        // 设置读取到焦点文件，修改属性
        state.activeNote.title = payload.title
        state.activeNote.content = payload.content
        for(let i=0; i<state.notes.length; i++) {
            if(state.notes[i].id === state.activeNote.id) {
                state.notes[i] = state.activeNote
                break;
            }
        }
    },
    deleNote (state) {
        state.notes.remove(state.activeNote)
        state.activeNote = state.notes[0] || {}
    },
    // 切换收藏
    toggNote (state) {
        state.activeNote.favorite = !state.activeNote.favorite
    },
    // 切换显示数据列表类型：全部 or 收藏
    setShowNote(state, show){
        state.show = show;
        // 切换数据展示，需要同步更新 activeNote
        if(show === 'favorite'){
        state.activeNote = state.notes.filter(note => note.favorite)[0] || {}
        } else {
        state.activeNote = state.notes[0] || {}
       }
    },
    // 添加商品
    addProInfo(state, v) {
        for (let i=0; i< state.proList.length; i++) {
            if (state.proList[i].proId === v) {
                if (state.proList[i].proNum === state.proList[i].car) {
                    return
                }
                state.proList[i].car = state.proList[i].car + 1
                state.buyCar = state.buyCar + 1
                // state.proList[i].proNum = state.proList[i].proNum - 1
                break;
            }
        }
    },
    // 删除商品
    deleteProInfo(state, v) {
        for (let i=0; i< state.proList.length; i++) {
            if (state.proList[i].proId === v) {
                if (state.proList[i].car === 0) {
                    return
                }
                state.proList[i].car = state.proList[i].car - 1
                state.buyCar = state.buyCar - 1
                // state.proList[i].proNum = state.proList[i].proNum + 1
                break;
            }
        }
    },
    // 根据商品id 获取商品详情
    getProInfoById (state, v) {
        for (let i=0; i< state.proList.length; i++) {
            if (state.proList[i].proId === v) {
                state.detail = state.proList[i]
                break;
            }
        }
    },
    // 设置当前激活的笔记
    setActiveNote(state, note) {
        state.activeNote = note
    }
}

const getters = {
    filteredNotes(state) {
        if(state.show === 'all' | state.show === '') {
            return state.notes || {}
        } else if(state.show === 'favorite') {
            return state.notes.filter(note => note.favorite) || {}
        }
    },
    // 获取显示状态
    show(state) {
        return state.show
    },
    // 获取焦点note
    activeNote(state) {
        return state.activeNote
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters
});