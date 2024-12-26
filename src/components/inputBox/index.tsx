import React, { ChangeEvent } from 'react';

interface BaseProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  maxLength?: number;
  required?: boolean;
  errorMessage?: string;
  customStyle?: {
    labelStyle?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
    errorMessageStyle?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
  };
}

interface FormInputProps extends BaseProps {
  inputStyle?: React.CSSProperties;
  type?: 'text' | 'number' | 'email' | 'password' | 'tel';
}

const baseContainerStyle: React.CSSProperties = {
  width: '100%',
};

const baseLabelStyle: React.CSSProperties = {
  display: 'block',
  textAlign: 'left',
  fontSize: '12px',
  fontFamily: 'Lato, sans-serif',
  fontWeight: 700,
  lineHeight: '16px',
  textTransform: 'capitalize',
  marginTop: '20px',
  marginBottom: '0px',
};

const baseInputStyle: React.CSSProperties = {
  width: '100%',
  padding: '8px 12px',
  marginTop: '4px',
  fontSize: '14px',
  borderRadius: '4px',
  border: '1px solid #e2e8f0',
  outline: 'none',
  transition: 'all 0.3s ease',
  boxSizing: 'border-box',
};

const errorMessageStyle: React.CSSProperties = {
  color: '#DC2626',
  fontSize: '12px',
  marginTop: '4px',
  fontFamily: 'Lato, sans-serif',
};

const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  onChange,
  placeholder = '',
  maxLength,
  customStyle = {},
  required = false,
  type = 'text',
  errorMessage,
}) => {
  const combinedLabelStyle: React.CSSProperties = {
    ...baseLabelStyle,
    color: '#1d1f2c',
    ...customStyle?.labelStyle,
  };

  const combinedInputStyle: React.CSSProperties = {
    ...baseInputStyle,
    ...customStyle?.inputStyle,
    borderColor: errorMessage ? '#DC2626' : '#e2e8f0',
    ...(errorMessage && { backgroundColor: 'rgba(220, 38, 38, 0.05)' }),
  };

  return (
    <div style={{ ...baseContainerStyle, ...customStyle?.containerStyle }}>
      <label style={combinedLabelStyle}>
        {label}
        {required && (
          <span style={{ color: '#EF4444', marginLeft: '4px' }}>*</span>
        )}
      </label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        type={type}
        style={combinedInputStyle}
        onFocus={(e) => {
          if (!errorMessage) {
            e.target.style.borderColor = '#3B82F6';
            e.target.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.2)';
          }
        }}
        onBlur={(e) => {
          if (!errorMessage) {
            e.target.style.borderColor = '#e2e8f0';
            e.target.style.boxShadow = 'none';
          }
        }}
      />
      {errorMessage && (
        <div
          style={{ ...errorMessageStyle, ...customStyle?.errorMessageStyle }}
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export { FormInput };
export type { FormInputProps };
