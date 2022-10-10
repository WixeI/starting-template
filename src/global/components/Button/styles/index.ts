import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { ButtonProps } from '..';

const propStyles = {
  variant: {
    solid: {
      enabled: css`
        background-color: ${(props) => props.theme.palette.primary.main};
        color: ${(props) => props.theme.palette.primary.contrastText};

        &:hover {
          position: relative;

          &:before {
            background: ${(props) => props.theme.palette.action.hover};

            position: absolute;
            content: '';
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
          }
        }

        &:focus {
          position: relative;

          &:before {
            background: ${(props) => props.theme.palette.action.focus};

            position: absolute;
            content: '';
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
          }
        }
      `,
      disabled: css`
        color: ${(props) => props.theme.palette.common.white};

        &:before {
          background: ${(props) => props.theme.palette.action.disabled};

          position: absolute;
          content: '';
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
        }

        cursor: not-allowed;
      `
    },
    outline: {
      enabled: {},
      disabled: {}
    }
  },
  isLoading: css`
    @-webkit-keyframes spin {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .loader {
      animation: spin 1s linear infinite;
    }
  `
};

export const Wrapper = styled(motion.button)<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: fit-content;
  max-width: 100%;
  height: 32px;
  padding: 8px 16px;

  border: none;
  border-radius: 4px;

  cursor: pointer;
  transition: all 0.3s;

  ${(props) => props.loading && propStyles.isLoading}

  ${(props) =>
    props.disabled
      ? props.variant && propStyles.variant[props.variant].disabled
      : props.variant && propStyles.variant[props.variant].enabled}
`;
