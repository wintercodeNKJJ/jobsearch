import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/layout';
import { StateContext } from './context/context';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <div className="App Roboto-medium text-neutral">
      <ApolloProvider client={client}>
        <StateContext>
          <Router>
            <Routes>
              <Route path='/*' element={<Layout/>}/>     
            </Routes>
          </Router>
        </StateContext>
      </ApolloProvider>
    </div>
  );
}

export default App;
