import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/Student/Quizz/Home.vue';
import Search from '@/views/Student/Quizz/Search.vue';
import Stats from '@/views/Student/Quizz/Stats.vue';
import Profile from '@/views/Student/Quizz/Profile.vue';
import CreateQuiz from '@/views/Student/Quizz/CreateQuiz.vue';
import Quiz from '@/views/Student/Quizz/Quiz.vue';
import NotFound from '@/components/shared/NotFound.vue';
import Result from '@/components/quiz/Result.vue';
import ReviewAnswers from '@/views/Student/Quizz/ReviewAnswers.vue';

const routes: Array<RouteRecordRaw> = [
  
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/create-quiz',
    name: 'CreateQuiz',
    component: CreateQuiz,
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz,
  },
  {
    path: '/results',
    name: 'Result',
    component: Result,
  },
  {
    path: '/review',
    name: 'Review',
    component: ReviewAnswers,
  },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
