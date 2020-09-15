import styled from 'styled-components'

const Layout = ({ children }) => {
  return (
    <>
      <StyledHeader>
        <h1>MyTasks</h1>
        <h2>by BURTON<span>MEDIA</span></h2>
      </StyledHeader>
      <StyledMain>
        <div className="content">
          {children}
        </div>
      </StyledMain>
    </>
  )
}

export default Layout

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;

  .content {
    max-width: 600px;
    padding: 25px;
  }
`

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #005596;
  color: white;
  height: 90px;

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.2em;
    font-weight: 400;
    span {
      font-weight: 900;
    }
  }

  h1, h2 {
    margin: 0;
  }
`