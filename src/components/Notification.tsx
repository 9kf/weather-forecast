import styled from "styled-components";

import {
  NotificationState,
  useNotificationStore,
} from "../store/notificationStore";

export default function Notification() {
  const { type, isShowing, message } = useNotificationStore((state) => ({
    type: state.type,
    message: state.message,
    isShowing: state.isShowing,
  }));

  if (isShowing) {
    return <Container type={type}>{message}</Container>;
  }
}

const Container = styled.div<{ type: NotificationState["type"] }>`
  position: absolute;
  right: 24px;
  top: 24px;
  padding: 16px;
  color: white;
  background-color: ${(props) =>
    props.type === "success" ? "seagreen" : "indianred"};
  border-radius: 6px;
`;
