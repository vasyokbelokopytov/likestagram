import { Card } from 'antd';

import { HeartIcon, ArrowLeftIcon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';
import { User, WithId, WithIsLiked, WithPhoto } from '../../app/types';

interface Props {
  user: (User & WithId & WithPhoto & WithIsLiked) | null;
  onLike: () => void;
  onSkip: () => void;
  onBack: () => void;
}

export const FrontSide: React.FC<Props> = ({
  user,
  onBack,
  onLike,
  onSkip,
}) => {
  if (!user) {
    return <div className="">No user</div>;
  }

  return (
    <Card
      className="w-96 absolute top-1/2 -left-0 -translate-y-1/2"
      style={{
        backfaceVisibility: 'hidden',
        zIndex: 10,
      }}
      bordered
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <button className="block w-full h-full" onClick={onBack}>
          <ArrowLeftIcon className="h-8 w-8 mx-auto" />
        </button>,
        <button className="block w-full h-full group" onClick={onLike}>
          <HeartIcon
            className={`h-8 w-8 mx-auto ${
              user.isLiked
                ? 'fill-red-500 text-red-500'
                : 'group-hover:text-red-500'
            }`}
          />
        </button>,
        <button className="block w-full h-full" onClick={onSkip}>
          <XIcon className="h-8 w-8 mx-auto" />
        </button>,
      ]}
    >
      <Card.Meta
        title={user.first_name + ' ' + user.last_name}
        description={
          <div>
            <p>Email: {user.email}</p>
            <p>Description: {user.description}</p>
          </div>
        }
      />
    </Card>
  );
};
