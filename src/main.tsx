import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';

import './index.css';

import { Root } from './routes/root.tsx';
import { AboutMe } from './routes/about-me.tsx';
import { Skills } from './routes/skills.tsx';

const router = createHashRouter([
  {
    path: '',
    element: <Root />,
    children: [
      {
        path: '',
        element: <AboutMe />,
      },
      {
        path: 'skills',
        element: <Skills />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
