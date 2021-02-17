import styled from 'styled-components'
import Content from './Content'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: [start] 15% [line1] auto [end];
  grid-template-rows: [row0] 10% [row1] 40% [row2] auto [row3];
`

const ContentContainer = styled.div`
  grid-column-start: line1;
  grid-column-end: end;
  grid-row-start: row1;
  grid-row-end: row3;
`

const H2 = styled.h2`
  margin: 1rem;
  color: #C9BBC8`

function App() {
  return (
    <div>
      <Wrapper>
      <H2>Grid Example</H2>
      <ContentContainer><Content /></ContentContainer>
      </Wrapper>
    </div>
  );
}

export default App;
