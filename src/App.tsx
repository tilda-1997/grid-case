import styled from 'styled-components'
import Content from './Content'
import Sidebar from './Sidebar'
import Header from './Header'


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: [start] 15% [line1] auto [end];
  grid-template-rows: [row0] 10% [row1] 40% [row2] 40% [row3];
  @media all and (max-width: 768px) {
    display: grid;
    grid-template-columns: [start-m] auto [end-m];
    grid-template-rows: [row0-m] auto [row1-m] auto [row2-m] auto [row3-m] auto [row4-m];
  } 
`

const H2Container = styled.div`
  grid-column-start: start;
  grid-column-end: line1;
  grid-row-start: row0;
  grid-row-end: row1;
  place-self: center;
  @media all and (max-width: 768px) {
    grid-column-start: start-m;
    grid-column-end: line1-m;
    grid-row-start: row0-m;
    grid-row-end: row1-m;
    justify-self: start;
  } 
`

const HeaderContainer = styled.div`
  grid-column-start: line1;
  grid-column-end: end;
  grid-row-start: row0;
  grid-row-end: row1;
  justify-self: end;
  align-self: center;
  @media all and (max-width: 768px) {
    grid-column-start: start-m;
    grid-column-end: line1-m;
    grid-row-start: row1-m;
    grid-row-end: row2-m;
    justify-self: start;
  } 
`


const SideContainer = styled.div`
  grid-column-start: start;
  grid-column-end: line1;
  grid-row-start: row1;
  grid-row-end: row3;
  place-self: start stretch;
  @media all and (max-width: 768px) {
    grid-column-start: start-m;
    grid-column-end: line1-m;
    grid-row-start: row2-m;
    grid-row-end: row3-m;
    justify-self: start;
  } 
`

const ContentContainer = styled.div`
  grid-column-start: line1;
  grid-column-end: end;
  grid-row-start: row1;
  grid-row-end: row3;
  justify-self: start;
  @media all and (max-width: 768px) {
    grid-column-start: start-m;
    grid-column-end: line1-m;
    grid-row-start: row3-m;
    grid-row-end: row4-m;
    justify-self: start;
  } 
`

const H2 = styled.h1`
  margin: 1rem;
  color: #C9BBC8`

function App() {
  return (
    <div>
      <Wrapper>
        <H2Container>
          <H2>Grid Example</H2>
        </H2Container>

        <HeaderContainer>
          <Header />
        </HeaderContainer>

        <SideContainer>
          <Sidebar />
        </SideContainer>

        <ContentContainer>
          <Content />
        </ContentContainer>

      </Wrapper>
    </div>
  );
}

export default App;
