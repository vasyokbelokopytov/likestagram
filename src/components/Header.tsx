import logo from '../assets/heart.png';
import { Avatar, Typography } from 'antd';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="w-full h-16 flex justify-between items-center py-2 px-6 shadow-md">
      <Link to="/" className="h-full flex items-center gap-4">
        <img src={logo} alt="logo" className="h-full" />
        <Typography.Title level={3} style={{ margin: 0 }}>
          Likestagram
        </Typography.Title>
      </Link>

      <Link to="/profile" className="h-full w-40 flex items-center gap-2">
        <Avatar className="bg-orange-300 shrink-0" size={'large'}>
          {'z'.toUpperCase()}
        </Avatar>
        <Typography.Title level={5} style={{ margin: 0 }} className="truncate">
          zloykrecker
        </Typography.Title>
      </Link>
    </header>
  );
};
