import {Center, Spinner} from '@chakra-ui/react';
import Layout from 'components/Layout';
import MyInfo from 'components/MyInfo';
import MySpinner from 'components/MySpinner';
import RecipeItemList from 'components/RecipeItemList';
import {AuthAction, useAuthUser, withAuthUser} from 'next-firebase-auth';

function MyPage() {
  const user = useAuthUser();

  return (
    <Layout>
      <MyInfo
        name={user.displayName}
        img={user.photoURL ?? ''}
        email={user.email}
      />
      <RecipeItemList title={'북마크한 레시피'} />
      <RecipeItemList title={'내가 등록한 레시피'} />
    </Layout>
  );
}

const MyLoader = () => <MySpinner />;

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  LoaderComponent: MyLoader,
  authPageURL: '/login',
})(MyPage);
