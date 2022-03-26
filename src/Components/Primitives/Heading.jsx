import styled from 'styled-components';

const Heading = styled.h1`
    font-family: 'Inter';
    font-weight: 400;
    color: #3a3a3a;
    font-size: 2rem;
    text-align: left;
`;

function HeadingComponent(props) {
    return (
        <Heading>{props.children}</Heading>
    );
};

export default HeadingComponent;