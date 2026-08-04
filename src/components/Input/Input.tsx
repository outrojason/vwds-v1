import React from 'react';
import styles from './Input.module.css';

/**
 * VWDS Input (v1)
 *
 * Campo de texto ou textarea, com label fixo, help text e estados
 * default/focus/error/disabled. Controlado via value/onChange.
 * Zero valores literais — tudo referencia component.input.* nos tokens.
 */

export interface InputProps {
  label?: string;
  /** Ignorado quando multiline=true. */
  type?: string;
  /** Renderiza <textarea> em vez de <input>. */
  multiline?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  /** Quando presente, ativa o estado de erro e substitui o helperText. */
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  /** Gerado automaticamente se não vier — associa label/mensagem ao campo. */
  id?: string;
  name?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  maxLength?: number;
  minLength?: number;
  readOnly?: boolean;
  className?: string;
}

export const Input = ({
  label,
  type = 'text',
  multiline = false,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  error,
  helperText,
  required = false,
  disabled = false,
  id,
  name,
  autoComplete,
  autoFocus,
  maxLength,
  minLength,
  readOnly,
  className,
}: InputProps) => {
  const generatedId = React.useId();
  const fieldId = id ?? generatedId;
  const messageId = `${fieldId}-message`;
  const hasError = Boolean(error);
  const message = hasError ? error : helperText;

  const fieldClasses = [
    styles.field,
    multiline ? styles.multiline : '',
    hasError ? styles.error : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.root}>
      {label ? (
        <label className={styles.label} htmlFor={fieldId}>
          {label}
          {required ? (
            <span className={styles.requiredMark} aria-hidden="true"> *</span>
          ) : null}
        </label>
      ) : null}
      {multiline ? (
        <textarea
          id={fieldId}
          className={fieldClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          required={required}
          disabled={disabled}
          name={name}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          maxLength={maxLength}
          minLength={minLength}
          readOnly={readOnly}
          aria-invalid={hasError || undefined}
          aria-describedby={message ? messageId : undefined}
        />
      ) : (
        <input
          id={fieldId}
          type={type}
          className={fieldClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          required={required}
          disabled={disabled}
          name={name}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          maxLength={maxLength}
          minLength={minLength}
          readOnly={readOnly}
          aria-invalid={hasError || undefined}
          aria-describedby={message ? messageId : undefined}
        />
      )}
      {message ? (
        <span id={messageId} className={hasError ? styles.helperError : styles.helper}>
          {message}
        </span>
      ) : null}
    </div>
  );
};

Input.displayName = 'Input';
