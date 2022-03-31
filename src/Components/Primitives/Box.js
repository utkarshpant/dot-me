import styled from 'styled-components';

const Box = styled.div`
  --content-width: 50%;
  display: flex;
  width: 100%;
  margin-top: 5vh;
  @media (min-width: 768px) {
    width: var(--content-width);
  }
`;

/**
 * 
 * @param {object} props passed down to the component
 * @returns JSX
 * The Box component is a styled `div`.
 */
function BoxComponent(props) {
  return (
    <Box>
      {props.children}
    </Box>
  );
};

export default BoxComponent;