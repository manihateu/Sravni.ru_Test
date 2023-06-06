import EmptyData from "../pages/EmptyData/EmptyData"
import Home from "../pages/Home/Home"
import UserPage from "../pages/UserPage/UserPage"

const RouteNames = {
    HOME: '/',
    USER_PAGE: '/user/:userid',
    EMPTY_DATA: '/user',
}

export const mainRoutes = [
    {path: RouteNames.HOME, element: Home},
    {path: RouteNames.USER_PAGE, element: UserPage},
    {path: RouteNames.EMPTY_DATA, element: EmptyData}
]

