import React from 'react'
import { FormContainer, FormBox, FormMiddleBox, Input, TextArea } from './styles'
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { Text } from "../../homeComp/experience/styles";
import { ButtonPrimary } from '../../homeComp/cocktails/styles';


interface FormInputProps {
  name: string;
  id: string;
  type: React.HTMLInputTypeAttribute;
  required: boolean 
}

export const FormInput = ({ name, id, type, required}: FormInputProps) => {
  const { register } = useFormContext(); // retrieve all hook methods
  return <Input required={required} type={type} id={id} {...register(`${name}` as const)} />;

}

const Forum = () => {

  const methods = useForm();
  const onSubmit = (data:any) => {
    console.log(data)
    methods.reset()
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormContainer>
          <FormBox>
            <label htmlFor='name'>
              <Text>Name</Text>
            </label>
            <FormInput required={true} type="text" id="name" name="name" />
          </FormBox>
          <FormMiddleBox>
          <FormBox>
            <label htmlFor='email'>
              <Text>Email</Text>
            </label>
            <FormInput required={true} type="email" id="email" name="email" />
          </FormBox>
          
          <FormBox>
            <label htmlFor='amount'>
              <Text>How many Persons?</Text>
            </label>
            <FormInput required={true} type="number" id="amount" name="amount" />
          </FormBox>
          <FormBox>
            <label htmlFor='date'>
              <Text>Choose date</Text>
            </label>
            <FormInput required={true} type="date" id="date" name="date" />
          </FormBox>
          <FormBox>
            <label htmlFor='time'>
              <Text>Choose time</Text>
            </label>
            <FormInput required={true} type="time" id="time" name="time" />
          </FormBox>
          </FormMiddleBox>
          <FormBox>
            <label htmlFor='comments'>
              <Text>Comments</Text>
            </label>
            <TextArea id="comments" {...methods.register("comments")}/>
          </FormBox>
          <ButtonPrimary type='submit'>SEND</ButtonPrimary>
        </FormContainer>
      </form>
    </FormProvider>
  )
}

export default Forum