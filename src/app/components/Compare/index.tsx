import React from 'react';
import { ReactCompareSlider } from 'react-compare-slider';

const compareStyle = {
  width: '100%',
  height: '100vh',
};

type TCompareViewProps = {};

export const CompareView = ({ ...props }: TCompareViewProps) => {
  return (
    <ReactCompareSlider
      {...props}
      position={50}
      itemOne={
        <div className="bg-red-500">
          item one item oneitem oneitem oneitem oneitem oneitem oneitem oneitem
          oneitem oneitem oneitem oneitem oneitem oneitem oneitem oneitem
          oneitem one
        </div>
      }
      itemTwo={<div className="bg-black">item two</div>}
      onlyHandleDraggable={Boolean(true)}
      style={compareStyle}
    />
  );
};
