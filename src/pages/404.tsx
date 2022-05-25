import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h1 {
    font-family: 'RobotoMonoRegular';
    font-size: 3vw;
  }
`;

export default function NotFound() {
  return (
    <Wrapper>
      <h1>404 not found</h1>
    </Wrapper>
  );
}
