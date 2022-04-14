import React from 'react'
import { useForm, FormProvider } from "react-hook-form";
import { FormBox, TextArea } from '../../reserveComp/visitUs/styles'
import { Header, Text } from "../../homeComp/experience/styles";
import { ButtonPrimary } from '../../homeComp/cocktails/styles';
import { FormInput } from '../../reserveComp/visitUs/Forum';
import { ContentBox, FormContainer, MainContainer } from './styles';

const CommentForm = () => {

    const methods = useForm();
    const onSubmit = (data: any) => {
        console.log(data)
        methods.reset()
    };

    return (
       <MainContainer>
           <ContentBox>
           <Header  variant='h3'>Leave a Reply</Header>
            <Text>Your email address will not be published. Required fields are marked *</Text>
           </ContentBox>
            <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <FormContainer>
                <FormBox>
                        <label htmlFor='comments'>
                            <Text>Comments</Text>
                        </label>
                        <TextArea rows={7} id="comments" {...methods.register("comments")} />
                    </FormBox>
                    <FormBox>
                        <label htmlFor='name'>
                            <Text>Name</Text>
                        </label>
                        <FormInput required={true} type="text" id="name" name="name" />
                    </FormBox>
                    <FormBox>
                        <label htmlFor='email'>
                            <Text>Email</Text>
                        </label>
                        <FormInput required={true} type="email" id="email" name="email" />
                    </FormBox>
                    <FormBox>
                        <label htmlFor='website'>
                            <Text>Website</Text>
                        </label>
                        <FormInput required={true} type="text" id="website" name="website" />
                    </FormBox>
                    <ButtonPrimary type='submit'>POST COMMENT</ButtonPrimary>
                </FormContainer>
            </form>
        </FormProvider>
       </MainContainer>
    )
}

export default CommentForm