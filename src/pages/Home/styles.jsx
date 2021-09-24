import styled from "styled-components"

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  padding: 2em 2em 0 2em;
  overflow: hidden;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  overflow: auto;
`;

export const ListMessages = styled.ul`
  list-style-type: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: relative;

  ::before {
    content: "";
    position: fixed;
    top: 68px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, .6);
    width: 100%;
    height: 90px;
  }
`;

export const Message = styled.li`
  margin-bottom: 2em;
  color: ${({isBot}) => isBot ? "#444" : "cornflowerblue"};
  text-align: left;
  width: 100%;

  h1 {
    font-size: 36px;
    font-weight: 400;
  }
`;

export const BottomContent = styled.div`
  width: 100%;
  padding-top: 2em;

  display: flex;
  justify-content: center;

  button {
    cursor: pointer;
  }

  svg {
    width: 40px;
    height: 40px;
  }
`;