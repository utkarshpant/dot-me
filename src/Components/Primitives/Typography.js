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
            return child.type === 'em'
              ? <Emphasis>{child}</Emphasis>
              : child
          })
        }
      </Typography>
    </>
  )
};

export default TypographyComponent;