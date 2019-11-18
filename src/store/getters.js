const getters = {
    slider: state => state.menu.slider,
    navBarList: state => state.menu.navBarList,
    mainsHeight: state => state.menu.mainsHeight,
    Tags: state => state.tag.Tags,
    tagsShow: state => state.setting.tagsShow,
    logoShow: state => state.setting.logoShow,
    username: state => state.user.username
} 

export default getters