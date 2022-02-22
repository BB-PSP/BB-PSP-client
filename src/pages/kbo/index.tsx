import styled from 'styled-components';
import { breakpoints } from '../../styles/media';
import TeamSlider from '../../components/kbo/TeamSlider';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subtitle = styled.h2`
  font-family: 'RobotoMonoRegular';
  color: #b70000;
  ${breakpoints.large} {
    font-size: 1.4rem;
    line-height: 1.846rem;
    padding-top: 16.7rem;
  }
  ${breakpoints.medium} {
    font-size: 1.4rem;
    line-height: 1.846rem;
    padding-top: 16.7rem;
  }
  ${breakpoints.small} {
    font-size: 1.4rem;
    line-height: 1.846rem;
    padding-top: 10.7rem;
  }
`;

const Slider = styled.div``;

export default function Kbo() {
  return (
    <Wrapper>
      <Subtitle>choose professional team</Subtitle>
      <Slider>
        <TeamSlider />
      </Slider>
    </Wrapper>
  );
}
