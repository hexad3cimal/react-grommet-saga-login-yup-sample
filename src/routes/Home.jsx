import React from 'react';
import { Box } from 'grommet';
import { NavBar, LoginComponent } from '../components/Home';
import geo from './geo.png';

export const Home = () => (
  <section>
    <NavBar />
    <Box align="center" pad="large">
      <LoginComponent />
    </Box>
    {/* <Section>*/}
    {/*  <Footer />*/}
    {/* </Section>*/}
    <img src={geo} />
  </section>
);

export default Home;
