import { useState } from 'react';

import { FrontSide } from './FrontSide';
import { BackSide } from './BackSide';
import { useAppSelector } from '../../app/hooks';

export const UsersCard: React.FC = () => {
  const users = useAppSelector((state) => state.users.users);

  const [isFrontSide, setIsFrontSide] = useState(true);
  const [frontSideUser, setFrontSideUser] = useState(
    users ? users[0] ?? null : null
  );
  const [backSideUser, setBackSideUser] = useState(
    users ? users[0] ?? null : null
  );
  const [currentIndex, setCurrentIndex] = useState(0);

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
    const user = users
      ? users.find((_, i) => i === currentIndex + 1) ?? null
      : null;

    if (isFrontSide) {
      setBackSideUser(user);
      setIsFrontSide(false);
    } else {
      setFrontSideUser(user);
      setIsFrontSide(true);
    }

    setCurrentIndex((prev) => prev + 1);
    rotateNext();
  };

  const backClickHandler = () => {
    const user = users
      ? users.find((_, i) => i === currentIndex - 1) ?? null
      : null;

    if (isFrontSide) {
      setBackSideUser(user);
      setIsFrontSide(false);
    } else {
      setFrontSideUser(user);
      setIsFrontSide(true);
    }

    setCurrentIndex((prev) => prev - 1);
    rotateBack();
  };

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
        user={frontSideUser}
        onBack={backClickHandler}
        onLike={likeClickHandler}
        onSkip={() => {}}
      />
      <BackSide
        user={backSideUser}
        onBack={backClickHandler}
        onLike={likeClickHandler}
        onSkip={() => {}}
      />
    </div>
  );
};
