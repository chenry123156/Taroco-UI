import App from '@/containers/Index'

// 登录界面
export const loginRouter = {
    path: '/login',
    name: 'login',
    component: () => import('@/containers/login/index')
}

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/dashboard',
    component: App,
    children: [
        { path: '/dashboard', name: 'dashboard',title: '首页', component: () => import('@/containers/dashboard/default') },
        { path: '/turbine', name: 'turbine',title: 'Turbine', component: () => import('@/components/monitor/turbine') },
        { path: '/service_detail', name: 'service_detail',title: '服务实例详情', component: () => import('@/views/cloud/services/ServiceDetail') },
    ]
};

// 作为App组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/service_governance',
        icon: 'ant-icon-laptop',
        name: 'service_governance',
        title: '服务治理',
        component: App,
        children: [
            {
                path: 'service_list',
                title: '服务列表',
                name: 'service_list',
                component: () => import('@/views/cloud/services/ServiceList')
            },
            {
                path: 'service_tracking',
                title: '调用链追踪',
                name: 'service_tracking',
                component: () => import('@/views/cloud/services/ServiceChainTracking')
            }
        ]
    },
]

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    ...appRouter
];