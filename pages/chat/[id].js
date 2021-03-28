import Head from "next/head";
import styled from "styled-components";
import Sidebar from "../../components/Sidebar";
import ChatScreen from "../../components/ChatScreen";

function Chat() {
  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <ChatContainer>
        <ChatScreen />
      </ChatContainer>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  box-shadow: 1px 1px 4px -1px rgba(0, 0, 0, 0.75);
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const SidebarContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
