type ErrorMessageProps = {
  message: string;
  extraStyles?: React.CSSProperties;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  extraStyles,
}) => {
  return (
    <div className="error-message" style={extraStyles}>
      {message}
    </div>
  );
};

export default ErrorMessage;
