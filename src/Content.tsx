import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
    background: #D1DCE2;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 3px;
`

const Img = styled.img`
    padding: 0.5rem
    width: 300px;
    max-width: 300px;
    height: 200px;
`

const Page = styled.p`
    display: flex
    flex-flow: column wrap
    margin: 0.5rem
    padding: 0.5rem
`

export default function Content(){
    return(
        <>
         <Container>
                <Img src="http://5b0988e595225.cdn.sohucs.com/images/20171015/f799451c3f1a44c79b3a8a4c5039b955.jpeg" alt="meme" />
                <Page>Poets often use many words<br />
                    To say a simple thing<br />
                    It takes thought and time and rhyme<br />
                    To make a poem singing
                </Page>
            </Container>

            <Container> 
                <Img src="https://www.thehowlermonkey.com/wp-content/uploads/2020/09/Cat-Meme5.jpg" alt='cat meme' />
                <Page>
                Fly me to the moon, <br />
                And let me play among the stars<br />
                Won't you let me see what spring <br /> is like on Jupiter and Mars
                </Page>
            </Container>

            <Container>
                <Img src="http://5b0988e595225.cdn.sohucs.com/images/20171015/f799451c3f1a44c79b3a8a4c5039b955.jpeg" alt="meme" />
                <Page>Poets often use many words<br />
                    To say a simple thing<br />
                    It takes thought and time and rhyme<br />
                    To make a poem singing
                </Page>
            </Container>

        </>
    )
}