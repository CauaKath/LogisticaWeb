import styled, { css } from "styled-components";

interface ToastProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `
}

export const Container = styled.div<ToastProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  background: #fddede;
  color: #c53030;

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypeVariations[props.type || "info"]}

  ${props => !props.hasDescription && css`
    align-items: center;

    svg {
      margin-top: 0;
    }
  `}

  > svg {
    margin: 4px 8px 0 0;
  }

  div {
    flex: 1;

    margin-left: 10px;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    background: transparent;
    color: inherit;
    border: 0;
  }
`;