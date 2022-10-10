import { forwardRef } from 'react';
import { HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { RiLoader4Line } from 'react-icons/ri';
import * as S from './styles';

export interface ButtonProps extends HTMLMotionProps<'button'> {
  children: ReactNode;
  variant?: 'solid' | 'outline';
  loading?: boolean;
}

// eslint-disable-next-line react/display-name
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'solid', loading, ...rest }, ref) => {
    //Conditional Statements & Returns
    const loadingConditional = new Map([
      [true, <RiLoader4Line size="1rem" className="loader" />],
      [false, <>{children}</>]
    ]);

    return (
      <S.Wrapper
        {...rest}
        ref={ref}
        aria-disabled={rest.disabled}
        aria-busy={loading}
        variant={variant}
        disabled={rest.disabled}
        whileTap={{ scale: 1.1 }}
        drag="y"
        transition={{ ease: 'linear', delay: 0 }}
        {...(!(rest.disabled || loading) && { onClick: rest.onClick })}>
        {loadingConditional.get(loading || false)}
      </S.Wrapper>
    );
  }
);

export default Button;
