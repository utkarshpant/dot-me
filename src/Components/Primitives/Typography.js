import styled from 'styled-components';
import React from 'react';

const Typography = styled('p')({
  fontFamily: 'Inter',
  fontSize: '12pt',
  lineHeight: '20pt',
});

const Emphasis = styled.em({
  fontFamily: 'Newsreader',
  fontSize: '14pt',
  fontStyle: 'italic',
  lineHeight: '20pt',
});

const Strong  = styled.strong({
  fontFamily: 'Inter',
  fontSize: '12pt',
  fontWeight: '500',
  lineHeight: '20pt',
  padding: '0.5vh',
  borderRadius: '16px',
  transition: 'background 0.5s',
  ':hover': {
    background: '#BEEE62',
  }
});

/**
 * Renders typography as the `p` element.
 */
function TypographyComponent(props) {
  const { children } = props;
  return (
    <>
      <Typography>
        {
          React.Children.map(children, child => {
            if (child.type === 'em') {
              return <Emphasis>{child}</Emphasis>
            }
            if (child.type === 'strong') {
              return <Strong>{child}</Strong>
            }
            return child;
          })
        }
      </Typography>
    </>
  )
};

export default TypographyComponent;