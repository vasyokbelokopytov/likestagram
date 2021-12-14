import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeIsLiked } from '../../features/users/usersSlice';
import { Id } from '../../app/types';
import { Side } from './Side';

export const UsersCard: React.FC = () => {
  const users = useAppSelector((state) => state.users.users);
  const dispatch = useAppDispatch();

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

  useEffect(() => {
    const user = users
      ? users.find((_, i) => i === currentIndex) ?? null
      : null;

    if (isFrontSide) {
      setFrontSideUser(user);
    } else {
      setBackSideUser(user);
    }
  }, [currentIndex, isFrontSide, users]);

  const resetAngle = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName === 'transform') {
      setIsTransition(false);
      if (rotateAngle === 360 || rotateAngle === -360) {
        setRotateAngle(0);
      }
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

  const nextClickHandler = () => {
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

  const likeClickHandler = (id: Id) => {
    dispatch(changeIsLiked(id));
  };

  return (
    <div
      className="w-96 relative"
      style={{
        transition: isTransition ? 'transform 2s' : '',
        transformStyle: 'preserve-3d',
        transform: `rotateY(${rotateAngle}deg)`,
      }}
      onTransitionEnd={resetAngle}
    >
      <Side
        type="front"
        user={frontSideUser}
        onBack={backClickHandler}
        onLike={likeClickHandler}
        onNext={nextClickHandler}
        disablebuttons={isTransition}
      />
      <Side
        type="back"
        user={backSideUser}
        onBack={backClickHandler}
        onLike={likeClickHandler}
        onNext={nextClickHandler}
        disablebuttons={isTransition}
      />
    </div>
  );
};
