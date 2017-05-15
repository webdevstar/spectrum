//@flow
import React from 'react';

import { IconButton } from '../buttons';
import {
  StyledLabel,
  StyledPrefixLabel,
  StyledInput,
  StyledTextArea,
  StyledUnderlineInput,
  StyledHiddenInput,
  StyledCheckboxWrapper,
} from './style';

type InputProps = {
  children?: React$Element<any>,
  inputType?: String,
  defaultValue?: String,
  placeholder?: String,
  onChange?: Function,
  autofocus?: Boolean,
  checked?: Boolean,
  disabled: ?Boolean,
};

export const Input = (props: InputProps) => {
  return (
    <StyledLabel>
      {props.children}
      <StyledInput
        id={props.id}
        type={props.inputType}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        onChange={props.onChange}
        autofocus={props.autofocus}
      />
    </StyledLabel>
  );
};

export const Checkbox = (props: InputProps) => {
  return (
    <StyledLabel>
      <StyledCheckboxWrapper>
        {props.checked
          ? <IconButton glyph="checked" color="success.default" />
          : <IconButton glyph="unchecked" />}
        <StyledHiddenInput
          type="checkbox"
          id={props.id}
          checked={props.checked}
          onChange={props.onChange}
        />
        {props.children}
      </StyledCheckboxWrapper>
    </StyledLabel>
  );
};

export const TextArea = (props: InputProps) => {
  return (
    <StyledLabel>
      {props.children}
      <StyledTextArea
        id={props.id}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        autofocus={props.autofocus}
      />
    </StyledLabel>
  );
};

export const UnderlineInput = (props: InputProps) => {
  return (
    <StyledPrefixLabel disabled={props.disabled}>
      {props.children}
      <StyledUnderlineInput
        type="text"
        id={props.id}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        autofocus={props.autofocus}
        disabled={props.disabled}
      />
    </StyledPrefixLabel>
  );
};
