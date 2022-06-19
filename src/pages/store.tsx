import {getStoreItems} from 'api/store';
import Layout from 'components/Layout';
import StoreItemList from 'components/StoreItemList';
import {GetServerSideProps} from 'next';
import React from 'react';
import {IStoreItem} from 'types/store';

interface IStore {
  items: IStoreItem[];
}

function Store({items}: IStore) {
  return (
    <Layout>
      <StoreItemList items={items} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const items = await getStoreItems();

  return {
    props: {
      items,
    },
  };
};

export default Store;
