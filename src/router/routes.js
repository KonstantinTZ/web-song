// import Login from "../pages/Login"
import SongListPage from "../pages/SongListPage/SongListPage"
import GamePage from "../pages/GamePage/GamePage"
import CourseListPage from "../pages/CourseListPage/CourseListPage"

export const privateRoutes = [
    { path: '/course-list', component: <CourseListPage /> },
    { path: '/game/:id', component: <GamePage /> },
    { path: '/song-list/:id', component: <SongListPage /> }
]

// export const publicRoutes = [
//     {path:'/login', component:<Login/>},
// ]