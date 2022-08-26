import StyledButton from './style';

export interface ButtonProps {
  children: string;
  size?: string;
  primary?: boolean;
}

const Button = ({
  children,
  size = 'medium',
  primary = false,
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      size={size}
      primary={primary}
      onClick={() => console.log('Clicked...')}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
