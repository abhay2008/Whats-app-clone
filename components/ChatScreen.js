import React, { useEffect } from "react";
import styled from "styled-components";
import { useCollection } from "react-firebase-hooks/firestore";

function ChatScreen() {
  return (
    <div>
      <Container>
        <h1>This is a chat</h1>
      </Container>
    </div>
  );
}

export default ChatScreen;

const Container = styled.div``;
