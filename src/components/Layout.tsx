import { Route, Routes } from 'react-router-dom';
import { Authorization } from '../pages/Authorization';
import { Main } from '../pages/Main';
import { NotFound } from '../pages/NotFound';
import { Registration } from '../pages/Registration';
import { Profile } from '../pages/Profile';

export const Layout: React.FC = () => {
  return (
    <section
      className="flex-grow flex justify-center items-center p-6"
      style={{ perspective: 900 }}
    >
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Authorization />} />
        <Route path="/register" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};
