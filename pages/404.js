import styled from 'styled-components'

export default function Error404() {
  return (
    <>
      <Styled404 src="/404-error-cat.svg" alt="404 image" />
    </>
  )
}

const Styled404 = styled.img`
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
`
