import {
  ContentWrap,
  HeroWrap,
  SubTitle,
  Text,
  Title,
} from './HomeContent.style';

export const HomeContent = () => {

  return (
    <ContentWrap>
      <HeroWrap>
        <Title>Welcome to the PHONEBOOK app! </Title>
        <SubTitle> Organize your contacts with convenience and ease. </SubTitle>
        <Text>
          Join our user community today and experience a more organized way to
          manage your contacts. Sign up now to get quick access to your
          important information!
        </Text>
      </HeroWrap>
    </ContentWrap>
  );
};
