// * ./views/base/ClassManage.vue 
// * ./views/base/ModifyPassword.vue 
// * ./views/base/StudentManage.vue 
// * ./views/base/TeacherManage.vue 

export default [
    { path: '/ClassManage',component:()=> import('@/views/ClassManage')},
    { path: '/ModifyPassword',component:()=> import('@/views/ModifyPassword')},
    { path: '/StudentManage',component:()=> import('@/views/StudentManage')},
    { path: '/TeacherManage',component:()=> import('@/views/TeacherManage')},

]