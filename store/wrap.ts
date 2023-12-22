  import { wrapper } from "./Store";
  import { Eventapi, Getmembers, getRunningQueriesThunk } from "./api";

  export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    store.dispatch(Getmembers.initiate());
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    const { data } = Eventapi.endpoints.Getmembers.select(undefined)(store.getState());
    console.log('hola',data)
    return {
      props: { members: data },
    };
  });
