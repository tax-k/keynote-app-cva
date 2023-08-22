import React from 'react';
import { ReactCompareSlider } from 'react-compare-slider';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { usingClassNamesCode, usingCvaCode } from '@/utils/sampleData';

const compareStyle = {
  width: '100%',
  height: '100vh',
};

const codeFontStyle = {
  fontFamily: 'var(--font-source-code-pro)',
  paddingTop: 0,
  marginTop: 0,
};

type TCompareViewProps = {};

export const CompareView = ({ ...props }: TCompareViewProps) => {
  return (
    <div className="overflow-y-auto">
      <ReactCompareSlider
        {...props}
        position={50}
        itemOne={
          <div className="bg-black">
            <SyntaxHighlighter
              language="tsx"
              style={vscDarkPlus}
              customStyle={codeFontStyle}
              showLineNumbers
            >
              {usingClassNamesCode}
            </SyntaxHighlighter>
          </div>
        }
        itemTwo={
          <div className="bg-black">
            <SyntaxHighlighter
              language="tsx"
              style={vscDarkPlus}
              customStyle={codeFontStyle}
              showLineNumbers
            >
              {usingCvaCode}
            </SyntaxHighlighter>
          </div>
        }
        onlyHandleDraggable={Boolean(true)}
        style={compareStyle}
      />
    </div>
  );
};
