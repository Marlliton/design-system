import { ComponentProps, ElementType } from "react";
import { Input, Prefix, TextInputContainer } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}

export function TextInput({prefix,...rest}: TextInputProps) {
  const hasDisabled = rest.disabled

  return (
    <TextInputContainer className={hasDisabled ? "disabled" : ""}>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...rest} />
    </TextInputContainer>
  )
}

TextInput.displayName = "TextInput"
