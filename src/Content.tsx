import styled from 'styled-components'
import * as React from "react";

const Div = styled.div`
    display: grid;
    grid-template-columns: [c-start] 33% [c-line1] 33% [c-line2] auto [c-end];
    grid-template-rows: [c-row0] 50% [c-row1] 50% [c-row2];
    @media all and (max-width: 1500px) {
        display: grid;
        grid-template-columns: [c-start] auto [c-line] auto [c-end];
        grid-template-rows:[c-start] auto [c-end];
    } 
    @media all and (max-width: 1080px) {
        display: grid;
        grid-template-columns: [c-start] auto [c-end];
    } 
`

const Container = styled.div`
    background: #F3D8CF;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 3px;
    place-self: start stretch;
    min-height: 360px;
    max-height: 360px
`

const Img = styled.img`
    padding: 0.5rem
    width: 300px;
    max-width: 400px;
    max-height: 300px;
`

const Page = styled.p`
    margin: 0.5rem;
    padding: 0.5rem;
    color: #ABB6C8
`

const Content: React.FC = () => {
    return(
        <Div>
         <Container>
                <Img src="http://5b0988e595225.cdn.sohucs.com/images/20171015/f799451c3f1a44c79b3a8a4c5039b955.jpeg" alt="meme" />
                <Page>Poets often use many words <br />
                    To say a simple thing 
                </Page>
            </Container>

            <Container> 
                <Img src="https://www.thehowlermonkey.com/wp-content/uploads/2020/09/Cat-Meme5.jpg" alt='cat meme' />
                <Page>
                Fly me to the moon, <br />
                And let me play among the stars<br />
                </Page>
            </Container>

            <Container>
                <Img src="http://5b0988e595225.cdn.sohucs.com/images/20171015/f799451c3f1a44c79b3a8a4c5039b955.jpeg" alt="meme" />
                <Page>
                    It takes thought and time and rhyme<br />
                    To make a poem singing
                </Page>
            </Container>

            <Container>
                <Img src="http://5b0988e595225.cdn.sohucs.com/images/20171015/f799451c3f1a44c79b3a8a4c5039b955.jpeg" alt="meme" />
                <Page>
                    It takes thought and time and rhyme<br />
                    To make a poem singing
                </Page>
            </Container>

            <Container>
                <Img src="http://5b0988e595225.cdn.sohucs.com/images/20171015/f799451c3f1a44c79b3a8a4c5039b955.jpeg" alt="meme" />
                <Page>Poets often use many words<br />
                    To say a simple thing<br />
                </Page>
            </Container>

            <Container> 
                <Img src="https://www.thehowlermonkey.com/wp-content/uploads/2020/09/Cat-Meme5.jpg" alt='cat meme' />
                <Page>
                Fly me to the moon, <br />
                And let me play among the stars<br />
                </Page>
            </Container>


        </Div>
    )
}

export default Content