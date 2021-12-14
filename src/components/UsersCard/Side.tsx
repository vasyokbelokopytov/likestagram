import { Card } from 'antd';

import {
  HeartIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  RefreshIcon,
} from '@heroicons/react/outline';
import { Id, User, WithId, WithIsLiked, WithPhoto } from '../../app/types';

interface Props {
  type: 'front' | 'back';
  user: (User & WithId & WithPhoto & WithIsLiked) | null;
  onLike: (id: Id) => void;
  onNext: () => void;
  onBack: () => void;
  disablebuttons?: boolean;
}

export const Side: React.FC<Props> = ({
  type,
  user,
  onBack,
  onLike,
  onNext,
  disablebuttons = false,
}) => {
  const likeHandler = () => {
    if (user) {
      onLike(user.id);
    }
  };

  if (!user) {
    return (
      <Card
        className="w-96  absolute top-1/2 -left-0"
        style={
          type === 'front'
            ? {
                backfaceVisibility: 'hidden',
                zIndex: 10,
                transform: 'translateY(-50%)',
              }
            : {
                transform: 'translateY(-50%) rotateY(180deg)',
                backfaceVisibility: 'hidden',
              }
        }
        bordered
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <button className="block w-full h-full" disabled={disablebuttons}>
            <RefreshIcon className="h-8 w-8 mx-auto" />
          </button>,
        ]}
      >
        <Card.Meta
          title={`Ви побачили всіх користувачів`}
          description={<div className="h-32 overflow-y-scroll"></div>}
        />
      </Card>
    );
  }

  return (
    <Card
      className="w-96 absolute top-1/2 -left-0"
      style={
        type === 'front'
          ? {
              backfaceVisibility: 'hidden',
              zIndex: 10,
              transform: 'translateY(-50%)',
            }
          : {
              transform: 'translateY(-50%) rotateY(180deg)',
              backfaceVisibility: 'hidden',
            }
      }
      bordered
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <button
          className="block w-full h-full"
          onClick={onBack}
          disabled={disablebuttons}
        >
          <ArrowLeftIcon className="h-8 w-8 mx-auto" />
        </button>,

        <button
          className="block w-full h-full group"
          onClick={likeHandler}
          disabled={disablebuttons}
        >
          <HeartIcon
            className={`h-8 w-8 mx-auto ${
              user.isLiked
                ? 'fill-red-500 text-red-500'
                : 'group-hover:text-red-500'
            }`}
          />
        </button>,

        <button
          className="block w-full h-full"
          onClick={onNext}
          disabled={disablebuttons}
        >
          <ArrowRightIcon className="h-8 w-8 mx-auto" />
        </button>,
      ]}
    >
      <Card.Meta
        title={`${user.first_name} ${user.last_name}`}
        description={
          <div className="h-32 overflow-y-scroll">{user.description}</div>
        }
      />
    </Card>
  );
};
