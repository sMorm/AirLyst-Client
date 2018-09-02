import ApolloClient from 'apollo-boost';

const uri = 'http://localhost:4000';
const request = async operation => {
  const token = localStorage.getItem('jwt');
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  });
};

export default new ApolloClient({uri, request});
