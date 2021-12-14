import { Button, Card } from 'antd';

import { useEffect, useState } from 'react';
import { HeartIcon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';
import { FrontSide } from './FrontSide';
import { BackSide } from './BackSide';
import { useAppSelector } from '../../app/hooks';

export const UsersCard: React.FC = () => {
  const users = useAppSelector((state) => state.users.users);

  const [isFrontSide, setIsFrontSide] = useState(true);
  const [frontUserIndex, setFrontUserIndex] = useState(0);

  const [rotateAngle, setRotateAngle] = useState(0);
  const [isTransition, setIsTransition] = useState(false);

  const resetAngle = () => {
    if (rotateAngle === 360 || rotateAngle === -360) {
      setIsTransition(false);
      setRotateAngle(0);
    }
  };

  const rotateNext = () => {
    setIsTransition(true);
    setRotateAngle((prev) => prev + 180);
  };

  const rotateBack = () => {
    setIsTransition(true);
    setRotateAngle((prev) => prev - 180);
  };

  const likeClickHandler = () => {
    if (isFrontSide) {
      setIsFrontSide(false);
      rotateNext();
      return;
    }

    setFrontUserIndex((prev) => prev + 2);
    setIsFrontSide(true);
    rotateNext();
  };

  const backClickHandler = () => {
    if (isFrontSide) {
      setFrontUserIndex((prev) => prev - 2);
      setIsFrontSide(false);
      rotateBack();
      return;
    }

    setIsFrontSide(true);
    rotateBack();
  };

  // const frontUser = users?.find((_, i) => i === pairNumber) ?? null;
  // const backUser = users?.find((_, i) => i === pairNumber + 1) ?? null;

  return (
    <div
      className="w-96 h-full relative"
      style={{
        transition: isTransition ? 'transform 300ms' : '',
        transformStyle: 'preserve-3d',
        transform: `rotateY(${rotateAngle}deg)`,
      }}
      onTransitionEnd={resetAngle}
    >
      <FrontSide
        user={users?.find((_, i) => i === frontUserIndex) ?? null}
        onBack={backClickHandler}
        onLike={likeClickHandler}
        onSkip={() => {}}
      />
      <BackSide
        user={users?.find((_, i) => i === frontUserIndex + 1) ?? null}
        onBack={backClickHandler}
        onLike={likeClickHandler}
        onSkip={() => {}}
      />
    </div>
  );
};
