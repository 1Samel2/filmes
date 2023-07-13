import { createGlobalStyle } from "styled-components"


const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


h1{
  text-align: center;
  padding: 60px;
}

.section-header{
  display: flex;
  width: 100%;
  gap: 20px;

  a{
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
  }
}

`

export default GlobalStyles