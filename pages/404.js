import styled from 'styled-components'

export default function Error404() {
  return (
    <FlexContainer>
      <Styled404 src="/404-error-cat.svg" alt="404 image" />
      <StyledLink href="https://storyset.com/web">Web illustrations by Storyset</StyledLink>
    </FlexContainer>
  )
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Styled404 = styled.img`
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
`

const StyledLink = styled.a`
  text-align: center;
  color: #000;
  `