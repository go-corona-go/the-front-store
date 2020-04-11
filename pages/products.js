import { Grid } from '@material-ui/core';
import Layout from '../components/Layout';
import Filters from '../components/Filters';

const Home = () => (
  <Layout>
      <Grid container>
        <Grid container item xs={12} md={3} lg={2}>
          <Filters />
        </Grid>
      </Grid>
  </Layout>
);

export default Home;
