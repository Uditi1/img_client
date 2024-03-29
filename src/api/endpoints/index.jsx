export const Endpoints = {
    baseUrl: import.meta.env.VITE_API_URL,

    //admin
    login: 'admin/login',
    changePassword: 'admin/change',
    logout: 'admin/logout',

    //userauth 
    toggleUser: 'user/toggle',

    //user
    getAllUsers: 'user/all',

    //category
    list: 'categories/list',
    delete: 'categories/delete',
    create: 'categories/create',
    toggle: 'categories/toggle',

    //images
    getImages: 'images/get',
    imageDelete: 'images/delete',
    addImage: 'images/add',

    //settings
    getSettings: 'settings/get',
    updateTagsAndGuestUsers: 'settings/update',
    uploadSliderImages: 'settings/slider',

    //misc
    getProfileImage: 'misc/image?type=profile&name=',
    getImage: 'misc/image?type=images&name=',
    getSliderImage: 'misc/image?type=slider&name='
}