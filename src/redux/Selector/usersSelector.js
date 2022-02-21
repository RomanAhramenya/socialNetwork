export const DialogsSelector =(state)=>{
    return state.dialogs.MassegesData
};
export const HumenSelector =(state)=>{
    return state.dialogs.HumenData
}
export const isLoginSelector =(state)=>{
    return state.auth.isLogin
}
export const findeUsersSelector =(state)=>{
    return state.findUsers.Users
}
export const totalCountSelector =(state)=>{
    return state.findUsers.totalCount
}
export const pageSizeSelector =(state)=>{
    return state.findUsers.pageSize
}
export const currentPageSelector =(state)=>{
    return state.findUsers.currentPage
}
export const isLoadedSelector =(state)=>{
    return state.findUsers.isLoaded
}
export const disabledFollowedSelector =(state)=>{
    return state.findUsers.disabledFollowed
}