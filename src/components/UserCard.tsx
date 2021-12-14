import { Button, Card } from 'antd';

import { useState } from 'react';
import { HeartIcon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';

export const UserCard: React.FC = () => {
  const [liked, setLiked] = useState(false);

  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-96 h-full relative transition-transform duration-300"
      style={{
        transformStyle: 'preserve-3d',
        transform: flipped ? 'none' : 'rotateY(-180deg)',
      }}
    >
      <Card
        className="w-96 absolute top-1/2 left-0 bg-slate-200"
        style={{
          transform: 'translateY(-50%) rotateY(180deg)',
          pointerEvents: flipped ? 'none' : 'all',
          backfaceVisibility: 'hidden',
          zIndex: 200,
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <button
            className="block w-full h-full group"
            onClick={() => setFlipped(!flipped)}
          >
            <HeartIcon className="h-8 w-8 group-hover:text-red-500 mx-auto" />
          </button>,
          <button className="block w-full h-full">
            <XIcon className="h-8 w-8 mx-auto" />
          </button>,
        ]}
      >
        <Card.Meta
          title="Василий Белокопытов"
          description={
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem perferendis eius temporibus perspiciatis sit,
              voluptatibus expedita enim similique iusto accusamus iure? Et
              pariatur explicabo porro rerum deleniti repudiandae omnis
              perspiciatis?
            </p>
          }
        />
      </Card>
      <Card
        className="w-96 absolute top-1/2 left-0 -translate-y-1/2"
        style={{
          pointerEvents: !flipped ? 'none' : 'all',
          backfaceVisibility: 'hidden',
          zIndex: 500,
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <button
            className="block w-full h-full group"
            onClick={() => setFlipped(!flipped)}
          >
            <HeartIcon className="h-8 w-8 group-hover:text-red-500 mx-auto" />
          </button>,
          <button className="block w-full h-full">
            <XIcon className="h-8 w-8 mx-auto" />
          </button>,
        ]}
      >
        <Card.Meta
          title="Василий Белокопытов"
          description={
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem perferendis eius temporibus perspiciatis sit,
              voluptatibus expedita enim similique iusto accusamus iure? Et
              pariatur explicabo porro rerum deleniti repudiandae omnis
              perspiciatis?
            </p>
          }
        />
      </Card>
    </div>
  );
};
