import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Statics from './components/Statics/Statics';
import Blog from './components/Blog/Blog';
import QuizQuestion from './components/QuizQuestions/QuizQuestion';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, children:[
        {
          path:'/',
          loader: ()=> fetch(`https://openapi.programming-hero.com/api/quiz`),
          element:<Home></Home>
        },
        {
          path:'/statics',
          element: <Statics></Statics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path: 'quiz/:quizId',
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element:<QuizQuestion></QuizQuestion>
        },
      ]
    },
    {
      path:'*', element: <div>
        <p>Not found</p>
        </div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
